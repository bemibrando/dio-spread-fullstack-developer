function changeMode(){
    console.log(button);
    changeClasses();
    changeTexts();
}

function changeClasses(){
    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeTexts(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + "On";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + "On";
    return;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);