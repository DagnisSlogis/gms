export const getSmallThumbnail = (link) => {
  if (!link) return "";

  const re = /(?:\.([^.]+))?$/;
  const ext = re.exec(link)[0];
  let trimmedLink = link.replace(/\.[^/.]+$/, "");

  return trimmedLink + "-390x410" + ext;
};

export const formatToLabel = (format) => {
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
