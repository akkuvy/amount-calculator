const db = require("../config/connection");
const collection = require("../config/collection");
const { response } = require("express");

module.exports = {
  addAmount: (amount) => {
    return new Promise(async(resolve, reject) => {
  
   await  db .get()
        .collection(collection.amountCollection)
        .insertOne(amount).then((response)=>{
          resolve(response.ops[0])
        })
       

        
        
 
    });
  },
};
