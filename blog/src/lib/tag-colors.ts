function hslToHex(hue: number, saturation: number, lightness: number) {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const segment = hue / 60;
  const second = chroma * (1 - Math.abs((segment % 2) - 1));
  const match = lightness - chroma / 2;

  const [red, green, blue] =
    segment < 1 ? [chroma, second, 0] :
    segment < 2 ? [second, chroma, 0] :
    segment < 3 ? [0, chroma, second] :
    segment < 4 ? [0, second, chroma] :
    segment < 5 ? [second, 0, chroma] :
    [chroma, 0, second];

  return `#${[red, green, blue]
    .map((channel) => Math.round((channel + match) * 255).toString(16).padStart(2, '0'))
    .join('')}`;
}

export function tagColorStyle(tag: string) {
  const hash = [...tag].reduce(
    (value, character) => ((value * 31 + character.charCodeAt(0)) >>> 0),
    0
  );
  let mixed = hash;
  mixed = Math.imul(mixed ^ (mixed >>> 16), 0x85ebca6b);
  mixed = Math.imul(mixed ^ (mixed >>> 13), 0xc2b2ae35);
  mixed = (mixed ^ (mixed >>> 16)) >>> 0;
  const hue = Math.floor((mixed / 0x1_0000_0000) * 360);
  const light = hslToHex(hue, 0.52, 0.34);
  const dark = hslToHex(hue, 0.62, 0.72);

  return `--tag-light: ${light}; --tag-dark: ${dark};`;
}
