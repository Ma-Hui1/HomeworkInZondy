function sad(){
    //eye
    let eyeCover = document.getElementsByClassName('cover')[1];
    eyeCover.id='close-eyes';
    eyeCover.style.display='flex';
    //window
    let bg = document.getElementsByClassName('bg');
    bg[0].style.background='url(images/rainy.jpg) no-repeat center'
    bg[0].id='weather-bad'
    //battery
    document.getElementsByClassName('battery')[0].style.display='flex';
    document.getElementsByClassName('num-battery')[0].id='batt'
    //arm
    let hand = document.getElementsByClassName('greet')[0];
    hand.id='00';
    //greet
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('heart')[i].style.display='none'
    }
}

function displayEverywhere(heart) {
    heart.style.display = 'flex'
    let x, y;
    if (Math.random() > 0.5) x = Math.random() * 20
    else x = Math.random() * 20 + 70;
    if (Math.random() < 0.5) y = Math.random() * 20
    else y = Math.random() * 20 + 60;
    heart.style.top = y + '%';
    heart.style.left = x + '%';
}

function hi(){
    //eye
    let eyeCover = document.getElementsByClassName('cover')[1];
    eyeCover.id='eyeCover';
    eyeCover.style.display='none';
    //window
    let bg = document.getElementsByClassName('bg');
    bg[0].id='weather-good';
    bg[0].style.background='url(images/sunny.jpg) no-repeat center'
    // //battery
    document.getElementsByClassName('battery')[0].style.display='none';
    document.getElementsByClassName('num-battery')[0].id='none'
    //arm
    let hand = document.getElementsByClassName('greet')[0];
    hand.id='hand';
    //greet-words
    let heart;
    let greet = ['你好','Hello','こんにちは','bonjour','Здравствулте','สวัสดีครับ']
    greet.sort(function() {
        return (0.5-Math.random());
    });

    for (let i = 0; i < 3;i++){
        heart = document.getElementsByClassName('heart')[i];
        heart.innerHTML=greet[i]
        displayEverywhere(heart);
    }
}


