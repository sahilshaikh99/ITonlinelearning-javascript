function toggleMode(){
    const modeClass = document.querySelector("body").classList;
    console.log(modeClass)
    modeClass.toggle("dark");
}