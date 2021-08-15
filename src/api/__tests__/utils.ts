import getQueryString from "../utils";

describe("getQueryString tests", () => {
  test("should return a string with all parameters", () => {
    const params = {
      perPage: 20,
      page: 10,
      term: "news",
      tags: ["cool", "fresh", "exotic"],
      isActive: false,
    };

    const qs = getQueryString(params);

    expect(qs.includes("perPage=20")).toBeTruthy();
    expect(qs.includes("page=10")).toBeTruthy();
    expect(qs.includes("term=news")).toBeTruthy();
    expect(qs.includes("tags=cool,fresh,exotic")).toBeTruthy();
    expect(qs.includes("tags=cool,fresh,exotic")).toBeTruthy();
    expect(qs.includes("isActive=false")).toBeTruthy();
  });
});
