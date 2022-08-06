
window.onload = () => {
    main()
}

function main() {
    const test = document.getElementById('root');
    let rgbVal = document.getElementById('rgb_value');
    let hexVal = document.getElementById('hex_value');
    const btn = document.getElementById('color_change_btn');
    const rgbCopyBtn = document.getElementById('rgb_copy_btn')
    const hexCopyBtn = document.getElementById('hex_copy_btn')


    btn.addEventListener('click', function () {
        const bgcolor = genarateRgb();
        const hexColorCode = genarateHex();
        test.style.background = bgcolor;
        rgbVal.value = bgcolor;
        hexVal.value = hexColorCode;
    })

    rgbCopyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(rgbVal.value);
        genarateTostMassege(rgbVal.value)
    })
}



// rgb color genarator function

function genarateRgb() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;

}
genarateRgb();
// hex color genarator function

function genarateHex() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}

//   genarateTostMassege function
function genarateTostMassege(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.className = 'tost-massege toast-animation-in';

    function setTime(callback) {
        setTimeout(function () {
            div.className = 'tost-massege toast-animation-out';
            callback();
        }, 2500)
    }

    function displayNone() {
        setTimeout(function () {
            div.remove();
        }, 400)
    }
   

    setTime(displayNone);
    document.body.appendChild(div);
}




