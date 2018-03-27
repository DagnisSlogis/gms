import reducer from "./postsReducer";
import * as types from "./postActionTypes";

describe("Posts reducer", () => {
  const payload = [
    {
      id: 1,
      title: "Title"
    }
  ];

  it("returns POST_FETCH_SUCCESS state", () => {
    expect(
      reducer([], {
        type: types.POST_FETCH_SUCCESS,
        payload
      })
    ).toEqual(payload);
  });

  it("returns POST_FETCH/POST_FETCH_ERROR/default state", () => {
    const state = [
      {
        id: 2,
        title: "Diff title"
      }
    ];
    expect(
      reducer(state, {
        type: types.POST_FETCH
      })
    ).toEqual(state);
  });
});
