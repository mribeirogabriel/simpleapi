import api from "../src/api/api";

import request from "supertest";

describe("GET /", () => {
  it("returns status code 200", async () => {
    const res = await request(api).get("/").send({});

    expect(res.statusCode).toEqual(200);
  });
});

describe("POST /", () => {
  it("returns status code 200", async () => {
    const res = await request(api).post("/").send({});

    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /healthcheck", () => {
  it("returns status code 200", async () => {
    const res = await request(api).get("/healthcheck").send({});

    expect(res.statusCode).toEqual(200);
  });
});
