// const products=[]
const fs = require('fs')
const path = require('path')
let pa = path.join(path.dirname(require.main.filename),"data","productData.json");
const getProductFromFile =(cb)=>{
   
    fs.readFile(pa,(err,fileContent)=>{
        if(err){
            cb ([])
        }else{
            cb(JSON.parse(fileContent))
        }
    })
}
module.exports = class ProductClass {
    constructor(t){
        this.title=t
    }

    save(){
       

        getProductFromFile(products=>{
            products.push(this)
            fs.writeFile(pa,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
        
       
    }
    static fetchAll (cb){
        getProductFromFile(cb)
        // return products
    }
}