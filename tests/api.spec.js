import axios from "axios"
import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"
import { schemaLogin, schemaDistance, schemaFavorite } from  "../schemas/schema.js"


chai.use(chaiJsonSchemaAjv)

const { expect } = chai



const myInstance = axios.create({
    baseURL : 'https://airportgap.com/api'
})    

describe("AIRPORT GAP API TESTING", function(){
    it("(API Login)", async function(){
        const credential = {
            email: "iqbal@gmail.com",
            password: "iqbal123"
        }
        const response = await myInstance.post("/tokens", credential)
        const token = response.data.token
        myInstance.defaults.headers.Authorization = `Bearer ${token}`
          
        // console.log(response.data)
        expect(response.status).to.equal(200) 
        expect(response.data).to.be.jsonSchema(schemaLogin)
        
    })

    it("(API Airport Distance)", async function(){
        const fromTo = {
            from: "GKA",
            to: "MAG"
        }
        const response = await myInstance.post("/airports/distance", fromTo)

        // console.log(response.data.data.attributes)
        expect(response.status).to.equal(200) 
        expect(response.data).to.be.jsonSchema(schemaDistance)
        
    })


    it("(API Airport Favorites)", async function(){
        // const favorite = {
        //     airport_id: "CGK",
        //     note: "Indo Pride"
        // }
        // await myInstance.post("/favorites/", favorite)
        
        const response = await myInstance.get("/favorites")

        // console.log(response.data.data)
        expect(response.status).to.equal(200) 
        expect(response.data).to.be.jsonSchema(schemaFavorite)
        
    })

})



