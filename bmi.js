
var val=bmiCalculator(65,1.8);

if(val < 18.5){
  console.log("Your BMI is "+val+",so you are underweight");
} else {
    if ( val >= 18.5 && val <= 24.9) {
       console.log("Your BMI is "+val+",so you have a normal weight");
    } else {
      if ( val > 24.9) {
        console.log("Your BMI is "+val+",so you are overweight, watch your weight");
      }
    }
}

function bmiCalculator (weight, height) {
     return ( Math.round((weight/(height*height))));
}
// question 2

var age = 12;
var accompanied = true;
var allowed = (age >= 13) || ((age < 13) && accompanied);
Console.log(allowed);
