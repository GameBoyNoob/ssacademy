document.onmousemove = (event) => {
    let x = (event.clientX - 1) + "px";
    let y = (event.clientY - 1) + "px";

    mouse.style.transition = "0.03s";
    mouse.style.left = x;
    mouse.style.top = y;
}