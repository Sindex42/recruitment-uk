const express = require('express');
const router = express.Router();
const rp = require('request-promise')

// INPUT
// [
//   {
//     "id": 1,
//     "amount": 100,
//     "merchant": "Tescos Ltd",
//     "category": "food",
//     "paymentDate": "2019-01-27T14:24:48.960Z"
//   },
//   {
//     "id": 2,
//     "amount": 20,
//     "merchant": "TFL London",
//     "category": "transport",
//     "paymentDate": "2019-02-27T14:24:48.960Z"
//   }
// ]

 // iterate through the items and expecting it to turn it into
// OUTPUT
//  {
//   "food": {
//     "totalNumber": 1,
//     "totalValue": 100,
//     "averageValue": 100
//   },
//   "transport": {
//     "totalNumber": 1,
//     "totalValue": 20,
//     "averageValue": 20
//   }
// }



class TransformCategories {


   tCategories(){



   }


}
