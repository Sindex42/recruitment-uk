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
 {
  "food": {
    "totalNumber": 1,
    "totalValue": 100,
    "averageValue": 100
  },
  "transport": {
    "totalNumber": 1,
    "totalValue": 20,
    "averageValue": 20
  }
}



class TransformCategories {


   tCategories(){
     var afterTransformation = {}
      var beforeTransformation = [
      {
        "id": 1,
        "amount": 100,
        "merchant": "Tescos Ltd",
        "category": "food",
        "paymentDate": "2019-01-27T14:24:48.960Z"
      },
      {
        "id": 2,
        "amount": 20,
        "merchant": "TFL London",
        "category": "transport",
        "paymentDate": "2019-02-27T14:24:48.960Z"
      }
    ]

    beforeTransformation.forEach((transaction) => {
    if (!afterTransformation[transaction.category]){
      afterTransformation[transaction.category]
    }
    return afterTransformation
  })




  // Go through all categories, and create the keys. (from values)
  // 1. Start by creating all the keys, (EVERYTHING ELSE IS 0)
// 2. Iterate through again to update the values.

  // for each object, find category key, and if there is a category -> create a new key (from the value),
  // total number of that key is 1, if it already exisists, add 1 to total number

   }


}
