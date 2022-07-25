const input = document.querySelector('.clac-inputs');
const output = document.querySelector('.calc-outputs');
const keys = document.querySelectorAll('button');


keys.forEach(key=>{
    key.addEventListener("click",calculate);
})


function calculate()
{
    let buttonText = this.innerText;
    if (buttonText === "AC"){
        input.innerText = "";
        output.innerText = "0";
        return;
    }


    if (buttonText === "DEL"){
        input.textContent = input.textContent.substring(0, input.textContent.length-1);
        return;
    }

    if (buttonText === "="){
        try {
            output.innerText = eval(input.innerText);

            output.style.animation = "big 0.3s ease-in-out";
            input.style.animation = "small 0.3s ease-in-out";

            input.style.animationFillMode = "forwards";
            output.style.animationFillMode = "forwards";
        }
        catch{
            output.innerText = "Eror!";
        }
        return;
    }
    
    else{
        input.textContent += buttonText;
        return;
    }


}