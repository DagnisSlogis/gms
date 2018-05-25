import * as postsHelpers from "./postsHelpers";

describe("postsHelpers", () => {
  describe("#getSmallThumbnail(link)", () => {
    it("returns small thumbnail link", () => {
      const link = "http://test.com/hellp.png";
      expect(postsHelpers.getSmallThumbnail(link)).toBe(
        "http://test.com/hellp-390x410.png"
      );
    });
  });

  describe("#formatToLabel(format)", () => {
    describe("when format is image", () => {
      it("returns '- afiša -'", () => {
        expect(postsHelpers.formatToLabel("image")).toBe("- afiša -");
      });
    });

    describe("when format is gallery", () => {
      it("returns '- galerija -'", () => {
        expect(postsHelpers.formatToLabel("gallery")).toBe("- galerija -");
      });
    });

    describe("when format is video", () => {
      it("returns '- video -'", () => {
        expect(postsHelpers.formatToLabel("video")).toBe("- video -");
      });
    });

    describe("when any other format passed", () => {
      it("returns '- raksts -'", () => {
        expect(postsHelpers.formatToLabel("random")).toBe("- raksts -");
      });
    });
  });
});
