const rangeElement =document.getElementById('range')
const printTextPassword =document.getElementById('password')
const printTextLength =document.getElementById('textolength')
const printButton = document.getElementById('button')
const checkboxElement = document.getElementById('checkbox-1');
const checkboxElement2 = document.getElementById('checkbox-2');
const checkboxElement3 = document.getElementById('checkbox-3');
const checkboxElement4 = document.getElementById('checkbox-4');

const randomMay ='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const randomMin ='abcdefghijklmnñopqrstuvwxyz';
const randomNum ='1234567890'
const randomSim = '!@#$%^&*()_+-={}[]:;<>,.?'

const checkboxInfo = (event) =>{
    if(event.target.checked){
        printButton.disabled = false;
    
    } else{
        printButton.disabled = true;
    }
    console.dir(event.target);
}
checkboxElement.addEventListener('change', checkboxInfo)
checkboxElement2.addEventListener('change', checkboxInfo)
checkboxElement3.addEventListener('change', checkboxInfo)
checkboxElement4.addEventListener('change', checkboxInfo)


const printValueMin = ()=>{
    printTextLength.textContent =`LENGTH: ${rangeElement.value}`
};
rangeElement.addEventListener('input', printValueMin);

    const printPassword =() => {
        let password = '';
        for (let i=0; i<rangeElement.value; i++){
            if(checkboxElement.checked){
                password += randomMay[Math.floor(Math.random()*randomMay.length -1)];
            } else if(checkboxElement.checked && checkboxElement2.checked){
                password += randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomMin[Math.floor(Math.random()*randomMin.length -1)];
            } else if(checkboxElement.checked && checkboxElement3.checked){
                password += randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomNum[Math.floor(Math.random()*randomNum.length -1)];
            } else if(checkboxElement.checked && checkboxElement4.checked){
                password += randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomNum[Math.floor(Math.random()*randomNum.length -1)]+randomSim[Math.floor(Math.random()*randomSim.length -1)];
            }if(checkboxElement2.checked){
                password += randomMin[Math.floor(Math.random()*randomMin.length -1)];
            } else if (checkboxElement2.checked && checkboxElement3.checked){
                password += randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomNum[Math.floor(Math.random()*randomNum.length -1)];
            } else if (checkboxElement2.checked && checkboxElement4.checked){
                password += randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomSim[Math.floor(Math.random()*randomSim.length -1)];
            } if(checkboxElement3.checked){
                password += randomNum[Math.floor(Math.random()*randomNum.length -1)];
            } else if (checkboxElement3.checked && checkboxElement.checked){
                password += randomNum[Math.floor(Math.random()*randomNum.length -1)] + randomSim[Math.floor(Math.random()*randomSim.length -1)];
            } if(checkboxElement4.checked){
                password += randomSim[Math.floor(Math.random()*randomSim.length -1)];
            } else if (checkboxElement.checked&&checkboxElement2.checked&&checkboxElement3.checked&&checkboxElement4.checked){
                password += randomMay[Math.floor(Math.random()*randomMay.length -1)] + randomMin[Math.floor(Math.random()*randomMin.length -1)] + randomNum[Math.floor(Math.random()*randomNum.length -1)] + randomSim[Math.floor(Math.random()*randomSim.length -1)];
            }
        }
        printTextPassword.textContent = `${password}`;
        }
    printButton.addEventListener('click',printPassword);    
