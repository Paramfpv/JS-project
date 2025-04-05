function generateRandomColor() {
    let color = "#"
    let hex = "0123456789abcdef"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

function change() {
    const bgColor = generateRandomColor();
    let btnColor;
    // Keep generating a new color until it's different from background
    do {
        btnColor = generateRandomColor();
    } while (btnColor === bgColor);
    
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
    document.querySelector("button").style.backgroundColor = btnColor;
}