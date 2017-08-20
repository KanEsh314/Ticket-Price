function ticketCalculator(age){
  var price = 0;
  var ticket = 15;
  
  if(age <= 18 || age >= 65){
    price = 0.5*ticket;
  }
  else if(age >= 19 && age <= 40){
    price = ticket;
  }
  else if(age >= 41 && age <= 65){
    price = 0.75*ticket;
  }
  return price;
}
document.write(ticketCalculator(20));