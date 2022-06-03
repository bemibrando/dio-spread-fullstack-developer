(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTime(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function read() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function save(vehicles) {
            localStorage.setItem("patio", JSON.stringify(vehicles));
        }
        function add(vehicle, saving) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${vehicle.name}</td>
                <td>${vehicle.placa}</td>
                <td>${vehicle.entry}</td>
                <td>
                   <button class="delete" data-placa="${vehicle.placa}">X</button>
                </td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remove(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (saving)
                save([...read(), vehicle]);
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = read();
            if (patio.length) {
                patio.forEach((vehicle) => add(vehicle));
            }
        }
        function remove(placa) {
            const { entry, name } = read().find(vehicle => vehicle.placa === placa);
            const time = calcTime(new Date().getTime() - new Date(entry).getTime());
            if (!confirm(`O veiculo ${name} permaneceu por ${time}. Deseja encerrar?`))
                return;
            save(read().filter((vehicle) => vehicle.placa !== placa));
            render();
        }
        return { read, add, remove, save, render };
    }
    patio().render();
    (_a = $("#signin")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const name = (_a = $("#name")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        console.log({ name, placa });
        if (!name || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        patio().add({ name, placa, entry: new Date().toISOString() }, true);
    });
})();
