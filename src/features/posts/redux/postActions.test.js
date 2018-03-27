import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as actions from "./postActions";
import * as types from "./postActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe(">>> Actions -- Test postActions", () => {
  describe("#fetchPostsBegin()", () => {
    it("returns POST_FETCH", () => {
      const expectedReturn = { type: types.POST_FETCH };
      expect(actions.fetchPostsBegin()).toEqual(expectedReturn);
    });
  });

  describe("#fetchPostsSuccess(payload)", () => {
    it("returns POST_FETCH_SUCCESS", () => {
      const payload = [{ id: 1, title: "Title" }];
      const expectedReturn = { type: types.POST_FETCH_SUCCESS, payload };
      expect(actions.fetchPostsSuccess(payload)).toEqual(expectedReturn);
    });
  });

  describe("#fetchPostsBegin()", () => {
    it("returns POST_FETCH", () => {
      const expectedReturn = { type: types.POST_FETCH };
      expect(actions.fetchPostsBegin()).toEqual(expectedReturn);
    });
  });

  describe("#fetchPosts(page)", () => {
    let store;
    const PostsAPI = new MockAdapter(axios);
    const page = 1;
    const endPointUrl = `http://gulbenesmakslasskola.lv/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`;

    beforeEach(() => {
      store = mockStore({});
    });

    describe("when successful response", () => {
      it("returns posts", () => {
        const data = { response: true };
        PostsAPI.onGet(endPointUrl).reply(200, data);
        const expectedReturn = [
          { type: types.POST_FETCH },
          { type: types.POST_FETCH_SUCCESS, payload: data }
        ];
        return store.dispatch(actions.fetchPosts(1)).then(() => {
          const returnedActions = store.getActions();
          expect(returnedActions).toEqual(expectedReturn);
        });
      });
    });

    describe("when successful response", () => {
      it("returns posts", () => {
        PostsAPI.onGet(endPointUrl).reply(404);
        const expectedReturn = [
          { type: types.POST_FETCH },
          {
            type: types.POST_FETCH_ERROR,
            payload: new Error("Request failed with status code 404")
          }
        ];
        return store.dispatch(actions.fetchPosts(1)).then(() => {
          const returnedActions = store.getActions();
          expect(returnedActions).toEqual(expectedReturn);
        });
      });
    });
  });
});
