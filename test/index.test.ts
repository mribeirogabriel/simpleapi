import api from "../src/api/api";

import request from "supertest";

describe("GET /", () => {
  it("returns status code 200", async () => {
    const res = await request(api).get("/").send({});

    expect(res.statusCode).toEqual(200);
  });
});
