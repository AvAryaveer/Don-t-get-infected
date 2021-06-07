score = 0;
cross = true;
document.onkeydown = function(e) {
    console.log("Key code is :", e.keyCode)
    if(e.keyCode == 38){
        doctor = document.querySelector('.doctor');
        doctor.classList.add('animateDoctor');
        setTimeout(() => {
            console.log("yes")
            doctor.classList.remove('animateDoctor')
        }, 700);
    }

    if(e.keyCode == 39){
        doctor = document.querySelector('.doctor');
        doctorx =  parseInt(window.getComputedStyle(doctor, null).getPropertyValue('left'));
        doctor.style.left = doctorx + 112 + "px";
    }

    if(e.keyCode == 37){
        doctor = document.querySelector('.doctor');
        doctorx =  parseInt(window.getComputedStyle(doctor, null).getPropertyValue('left'));
        doctor.style.left = (doctorx - 112) + "px";
    }
}

setInterval(() => {
    doctor = document.querySelector('.doctor')
    gameover = document.querySelector('.gameover')
    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(doctor, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(doctor, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    //console.log(offsetX, offsetY)
    if(offsetX< 113 && offsetY<52){
           gameover.style.visibility = 'visible';
           obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX<  73 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur =  parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration:', newDur)
        }, 500);
       
    }
}, 10);

function updateScore(score){
    scorecount.innerHTML = "Your score:" + score
}