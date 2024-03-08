let changeColor = ()=>{
    let hex = '0123456789ABCDEF'
    let color = '#';
    for(let i=0;i<6;i++){
        let ind = Math.floor(Math.random()*15);
        color += hex[ind];
    }
    return color;
}
let interval = ()=>{
    let color = changeColor();
    console.log(color);
    document.querySelector('body').style.backgroundColor = `${color}`;
}
let start;

document.querySelector('#start').addEventListener('click', function(e){
    start = setInterval(interval,1000);
})
document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(start);
})