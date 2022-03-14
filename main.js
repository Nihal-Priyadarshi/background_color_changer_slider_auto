function color() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let alpha = document.getElementById("alpha").value;

    let display = document.getElementById("display");
    display.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
setInterval(color, 10)