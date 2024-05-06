import noImage from "../assets/noImage.png";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const taget = "media/";
  const index = url.indexOf(taget) + taget.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
