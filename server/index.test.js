const app = require("./index");
const supertest = require('supertest')
const mongoose = require("mongoose");
const { connectDB } = require("./config/db");
const request = supertest(app)

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGUwZTgwMWEzOTAwZjg5NjQ5M2Q3MiIsIm5hbWUiOiJiYXQiLCJpYXQiOjE2NzAxNDc0NjUsImV4cCI6MTY3MjczOTQ2NX0.ntFQOliHXIn67Is57YAVsfrJtOIKdhueMMf5Comn8sc"
beforeAll(async () => {
  await connectDB();
});
afterAll(async () => {
  await mongoose.connection.close();
});

// describe("GET /api/products token bhgu tohioldold", () => {
//   it("should return all products", async () => {
//     const res = await request.get("/api/v1/links");
//     expect(res.statusCode).toBe(401);
//     expect(res.body.success).toBe(false);
//     expect(res.body.error.message).toBe('ene uildeliig hiihed tanii erh hurehgui bn. Ta ehleed newtrej oroh ystoi!');
//   });
// });

// describe("GET /api/products", () => {
//   it("should return all products", async () => {
//     // const res = await request.get("/api/v1/links").set('Authorization', 'bearer ' + TOKEN);
//     const res = await request.get("/api/v1/links").set('Authorization', `Bearer ${TOKEN}`)
//     //console.log(res.text);
//     expect(res.statusCode).toBe(200);

//     // expect(res.body.data.length).toBeGreaterThan(0);
//   });
// });

// describe("POST /api/products", () => {
//   it("should create a product", async () => {
//     const res = await request(app).post("/api/products").send({
//       name: "Product 2",
//       price: 1009,
//       description: "Description 2",
//     });
//     expect(res.statusCode).toBe(201);
//     expect(res.body.name).toBe("Product 2");
//   });
// });

// describe("PUT /api/products/:id", () => {
//   it("should update a product", async () => {
//     const res = await request(app)
//       .patch("/api/products/6331abc9e9ececcc2d449e44")
//       .send({
//         name: "Product 4",
//         price: 104,
//         description: "Description 4",
//       });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.price).toBe(104);
//   });
// });

// describe("DELETE /api/products/:id", () => {
//   it("should delete a product", async () => {
//     const res = await request(app).delete(
//       "/api/products/6331abc9e9ececcc2d449e44"
//     );
//     expect(res.statusCode).toBe(200);
//   });
// });
