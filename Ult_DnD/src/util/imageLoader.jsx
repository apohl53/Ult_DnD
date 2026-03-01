const images = require.context("../assets/subclass-images", false, /\.png$/);

export const getImageForClass = (charClass) => {
  const normalized = charClass?.trim().toLowerCase();
  try {
    return images(`./${normalized}.png`);
  } catch {
    return images("placeholder.png");
  }
};
