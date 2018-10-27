export const getGalleryImages = (content) =>
  content.match(/(http:\/\/.*\.(?:png|jpg))/g);

export const getGalleryPostImages = ({ content: { rendered } }, caption ) =>
  getGalleryImages(rendered).map((src) => ({ src, caption }));
