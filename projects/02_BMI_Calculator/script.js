const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.querySelector('.result');

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height.';
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight.';
    }
    else{
        const BMI = (weight/((height*height/10000))).toFixed(2);
        console.log(BMI);
        // const text = document.createTextNode(`BMI is ${BMI}`);
        // result.appendChild(text);
        result.innerHTML = `<span> ${BMI} </span>`;
    }

})
