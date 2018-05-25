import React from "react";
import ReactDOM from "react-dom";
import PostsPage from "./PostsPage";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";

describe("PostsPage", () => {
  const initialState = { posts: [{ id: 1, title: "hey" }] };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<PostsPage store={store} />);
  });

  it("renders Smart component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("check if props matches initialState", () => {
    expect(wrapper.prop("posts")).toEqual(initialState.posts);
  });

  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  })
});
