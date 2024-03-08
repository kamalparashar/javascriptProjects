const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);

buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'cornsilk'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'chartreuse'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'cadetblue'){
            body.style.backgroundColor = e.target.id;
        }
    })
});