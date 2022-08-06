"use strict"

setInterval(clock , 1000)
function clock(){
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let session = "AM";
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
      }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    document.getElementById('hours').innerText = hh;
    document.getElementById('min').innerText = mm;
    document.getElementById('sec').innerText = ss;
    document.getElementById('am').innerText = session;

    return (session == "AM") ? true : false;
}

function setBg(){
    let newBg = clock();
    console.log(newBg)
    let bg = document.getElementById('clock');
    let timeBOx = document.getElementsByClassName('item');
    let semi = document.getElementsByClassName('semi');
    if(newBg){
        // background color chenge at day
        bg.style.background = `url("image/Sky_with_Sun_Background-1481.jpg") no-repeat 100% 100% / 100% 100%`;

        // time box background color chenge
        for(let i = 0; i < timeBOx.length; i++){
            timeBOx[i].style.background = `linear-gradient(rgba(0, 0, 0, 0.6) , rgba(0, 0, 0, 0.6))`;
            timeBOx[i].style.color = `#fff`;
            
        }
        for(let i = 0; i < semi.length; i++){
            semi[i].style.color = `#fff`;
        }

    }else if(newBg == false){
        // background color chenge at night
        bg.style.background = `url("image/100519.jpg") no-repeat 100% 100% / 100% 100%`;
    }
}
setBg()
