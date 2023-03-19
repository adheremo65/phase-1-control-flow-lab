function scuberGreetingForFeet(feetRide){
  let sample;
  if (feetRide <= 400) {
    sample = 'This one is on me!'
  } else if (feetRide >=400 && feetRide <= 2000 ) {
    sample = 'That will be twenty bucks.'
  } 
  else if (feetRide > 2000 && feetRide <= 2500) {
    sample = 'I will gladly take your thirty bucks.'
  } else if (feetRide > 2500) {
    sample = 'No can do.'
  } 
  return sample;

}

  scuberGreetingForFeet();

  



  // Write your code here!

function ternaryCheckCity(city){
  //const city = "NYC";
  let result;
  result = city === "NYC"? 'Ok, sounds good.':'No go.';
  return result; 
}

ternaryCheckCity();
function switchOnCharmFromTip(tip ){
  let okay;

      switch (tip) {
        case 'generous':
          okay ='Thank you so much.'
         break
        case  "not as generous":
         okay ="Thank you."
        break
        default: 
          okay = "Bye."
      } 
  return okay;
}

switchOnCharmFromTip();