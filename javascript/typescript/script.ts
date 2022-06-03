interface Vehicle{
    name: string;
    placa: string;
    entry: Date | string;
}

(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function calcTime(mil: number){
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);

        return `${min}m e ${sec}s`;
    }

    function patio(){
        function read(): Vehicle[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function save(vehicles: Vehicle[]){
            localStorage.setItem("patio", JSON.stringify(vehicles));
        }

        function add(vehicle: Vehicle, saving?: boolean){
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${vehicle.name}</td>
                <td>${vehicle.placa}</td>
                <td>${vehicle.entry}</td>
                <td>
                   <button class="delete" data-placa="${vehicle.placa}">X</button>
                </td>
            `;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remove(this.dataset.placa);
            });

            $("#patio")?.appendChild(row);

            if(saving) save([...read(), vehicle]);
        }

        function render(){
            $("#patio")!.innerHTML = "";
            const patio = read();

            if(patio.length){
                patio.forEach((vehicle) => add(vehicle));
            }
        }

        function remove(placa: string){
            const { entry, name } = read().find(vehicle => vehicle.placa === placa);

            const time = calcTime(new Date().getTime() - new Date(entry).getTime());

            if(!confirm(`O veiculo ${name} permaneceu por ${time}. Deseja encerrar?`))
                return;

            save(read().filter((vehicle) => vehicle.placa !== placa));
            render();
        }

        return {read, add, remove, save, render};
    }

    patio().render();
    $("#signin")?.addEventListener("click", () => {
        const name = $("#name")?.value;
        const placa = $("#placa")?.value;
        console.log({name, placa});
        if(!name || !placa){
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        
        patio().add({name, placa, entry: new Date().toISOString()}, true);

    });
})();