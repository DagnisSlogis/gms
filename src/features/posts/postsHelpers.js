// @flow
export const getSmallThumbnail = (link: string): string => {
  if (link) {
    let re = /(?:\.([^.]+))?$/;
    let ext = re.exec(link)[0];
    link = link.replace(/\.[^/.]+$/, "");
    return link + "-390x410" + ext;
  }
  return "";
};

export const formatToLabel = (format: string): string => {
  switch (format) {
    case "image":
      return "- afiša -";
    case "gallery":
      return "- galerija -";
    case "video":
      return "- video -";
    default:
      return "- raksts -";
  }
};
