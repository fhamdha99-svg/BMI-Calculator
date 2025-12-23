function calculateBMI(){
    let weightinput = prompt("Enter your weight in kg:");
        let heightinput = prompt("Enter your height in cm:");
    
    let weight =parseFloat(weightinput);
    let heightcm = parseFloat(heightinput);
    
    let height = heightcm/100;

    let BMI = weight / (height*height);
    
    document.getElementById("result").innerHTML= "Your BMI is:" + BMI.toFixed(2)
    ;
   
    if (BMI <= 18){ document.getElementById("review").innerHTML= "Your are a malnutrition person"}

    else if (18<BMI && BMI<=24.9){ document.getElementById("review").innerHTML= "Your are a healthy person"}
    else if (24.9<BMI && BMI<=29.9){ document.getElementById("review").innerHTML= "Your are an overweight person"}
   
    else{document.getElementById("review").innerHTML= "Your are an obese person.take care your body"}
   

}
    
    


