const btnEl = document.getElementById("btn");

btnEl.addEventListener("mouseover", ()=>{
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;
    btnEl.style.setProperty("--positionX", x + "px");
    btnEl.style.setProperty("--positionY", y + "px");
});