// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");

describe('./musicians endpoint', () => {
    // Write your tests here

    test("Testing bakedGoods endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
    })
    test("Testing bakedGoods endpoint returns the right status code", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })
    test("Testing bakedGoods endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(response.body[0]).toHaveProperty("id")
        expect(response.body[0]).toHaveProperty("name")
        expect(response.body[0]).toHaveProperty("instrument")
        expect(response.body[0]).toHaveProperty("createdAt")
        expect(response.body[0]).toHaveProperty("updatedAt")
    })

})