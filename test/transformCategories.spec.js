const chai = require('chai');
const TransformCategories = require('../src/transformCategories')

// chai.should();

describe('TransformCategories', () => {
  it('categorises transations', () => {
    let data = [
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

    let transform = new TransformCategories()
  
    (transform.tCategories(data)).should.equal(true)
  })
})
