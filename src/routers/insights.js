const express = require('express');
const router = express.Router();
const rp = require('request-promise')

router.get('/categories', async (req, res, next) => {
  try {
    var options = {
      uri: 'https://transactions.spokedev.xyz/transactions',
      headers: {
         'User-Agent': 'Request-Promise'
      },
      json: true
    };

    rp(options)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (err) {
         // API call failed...
      });

  } catch (err) {
    return next(err);
  }
});

router.get('/cashflow', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

router.get('/merchants', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
