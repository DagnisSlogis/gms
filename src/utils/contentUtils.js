import sanitizeHtml from 'sanitize-html';


export const getGalleryImages = (content) =>
  content.match(/(http:\/\/.*\.(?:png|jpg))/g);

export const getGalleryPostImages = ({ content: { rendered } }, caption ) =>
  getGalleryImages(rendered).map((src) => ({ src, caption, width: 16, height: 9 }));

export const hasGallery = ({ content: { rendered } }) =>
  rendered.includes('st_gallery_wp');

export const getContentWithoutGallery = ({ content: { rendered } }) =>
  sanitizeHtml(rendered, {
    exclusiveFilter: (frame) => {
      return !(frame.tag === 'div' && frame.attribs.class === 'st_gallery_wp st-gallery-wrapper classic')
    }
  });
