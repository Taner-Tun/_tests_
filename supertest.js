const request = require("supertest")

const HOST = process.env.HOST || "https://petstore.swagger.io/";

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500)); //avoid just open handle
});

describe("Testing JEST", () => {
  describe("given that jest is working", () => {
    it("should work", () => {
      expect(1).toBe(1);
    });
  });
});

describe("Testing JEST", () => {
  describe.skip("given that jest is working", () => {  //use skip to disable a test
    it("should work", () => {
      expect(1).toBe(1);
    });
  });
});

describe("Testing petshop with supertest", () => {
  describe("given GET /", () => {
    it("should return 200", () => {
      container = request(HOST)
      container.get('/')
        .expect(200)
        .expect('Allow', /GET/)
        .expect('Allow', /DELETE/)
        .expect('Allow', /POST/)
        .expect('Content-Type', 'application/json')

    });
  });
});