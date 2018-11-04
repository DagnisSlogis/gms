// jest PostThumbBlock
import React from "react";
import { shallow } from "enzyme";
import { PostThumbBlock } from "./PostThumbBlock";

import { getSmallThumbnail, formatToLabel } from "../postsHelpers";
jest.mock("../postsHelpers", () => ({
  getSmallThumbnail: jest.fn(),
  formatToLabel: jest.fn()
}));

describe("<PostThumbBlock/>", () => {
  describe("Has post in post prop", () => {
    const post = {
      id: 1,
      format: "video",
      title: {
        rendered: "Title 1"
      },
      _embedded: {
        "wp:featuredmedia": {
          "0": {
            source_url: "test"
          }
        }
      }
    };

    it("renders correctly", () => {
      const wrapper = shallow(<PostThumbBlock post={post} />);
      expect(wrapper).toMatchSnapshot();
      expect(getSmallThumbnail.mock.calls.length).toBe(1);
      expect(wrapper.length).toEqual(1);
      expect(formatToLabel.mock.calls.length).toBe(1);
    });
  });
});
