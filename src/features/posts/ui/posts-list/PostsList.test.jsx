// jest PostsList
import React from "react";
import { shallow } from "enzyme";
import PostsList from "./PostsList";
import "jest-styled-components";

describe("<PostsList/>", () => {
  describe("Has posts in posts prop", () => {
    let wrapper;
    const posts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];

    beforeEach(() => {
      wrapper = shallow(<PostsList posts={posts}/>);
    });

    it("renders component", () => {
      expect(wrapper.length).toEqual(1);
    });

    it("snapshot test", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Has no posts in posts prop", () => {
    let wrapper;
    const posts = [];

    beforeEach(() => {
      wrapper = shallow(<PostsList posts={posts}/>);
    })

    it("renders component", () => {
      expect(wrapper.length).toEqual(1);
    });

    it("renders isLoading text", () => {
      expect(wrapper.text()).toContain("is Loading");
    });

    it("snapshot test", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
