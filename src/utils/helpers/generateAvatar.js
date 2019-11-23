import tinycolor from 'tinycolor2';

const generateAvatar = userId => {
  const [r, g, b] = userId
    .substr(0, 3)
    .split('')
    .map(char => {
      return char.charCodeAt() > 255 ? 255 : char.charCodeAt() < 0 ? 0 : char.charCodeAt();
    });

  return {
    color: tinycolor({ r, g, b })
      .lighten(5)
      .saturate(70)
      .toHex(),
    lightenColor: tinycolor({ r, g, b })
      .lighten(20)
      .saturate(70)
      .spin(-90)
      .toHex()
  };
};

export default generateAvatar;
