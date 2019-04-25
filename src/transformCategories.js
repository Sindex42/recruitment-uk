const express = require('express');
const router = express.Router();
const rp = require('request-promise')

class TransformCategories {
  tCategories (transactions) {
    var result = {}

    transactions.forEach((transaction) => {
      if (!result[transaction.category]) {
        result[transaction.category] = {
          totalNumber: 1,
          totalValue: transaction.amount,
          averageValue: transaction.amount
        }
      }
    })
    return result
  }
}


// Go through all categories, and create the keys. (from values)
// 1. Start by creating all the keys, (EVERYTHING ELSE IS 0)
// 2. Iterate through again to update the values.

// for each object, find category key, and if there is a category -> create a new key (from the value),
// total number of that key is 1, if it already exisists, add 1 to total number

module.exports = TransformCategories
