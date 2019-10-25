"use strict";


const isHometown = (town) => {

  return town === 'San Francisco';
};




const getFullName = (firstName, lastName)  => {

  return `${firstName}, ${lastName}`
};




const calculateTotal = (basePrice, state, tax=0.05) => {

  let subtotal = basePrice * (1 + tax);
  let fee = 0;

  if (state === 'CA'){
    fee = 0.03 * subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state == 'MA') {
    if (base_price <= 100) {
      fee = 1;
    }else {
      fee = 3;
    };
  };
  return subtotal + fee

};

