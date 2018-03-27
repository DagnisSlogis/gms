import initialState from "./initialState";

describe("initialState", () => {
  it("is as defined", () => {
    const expectedInitialState = {
      posts: []
    };
    expect(initialState).toEqual(expectedInitialState);
  });
});
