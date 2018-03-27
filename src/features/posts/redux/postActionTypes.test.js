import * as types from "./postActionTypes";

describe("postActionTypes", () => {
  it("returns POST_FETCH", () => {
    expect(types.POST_FETCH).toMatch("POST_FETCH")
  });

  it("returns POST_FETCH_SUCCESS", () => {
    expect(types.POST_FETCH_SUCCESS).toMatch("POST_FETCH_SUCCESS")
  });

  it("returns POST_FETCH_ERROR", () => {
    expect(types.POST_FETCH_ERROR).toMatch("POST_FETCH_ERROR")
  });
});
