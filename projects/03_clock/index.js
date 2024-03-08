setInterval(function(){
    const date = new Date();
    const time = document.querySelector('.time');
    time.innerHTML = date.toLocaleTimeString();
}, 1000);
