function convertNumberToPx(px: number): string {
  return `${px}px`;
}

function convertPxToRem(px: number, root: number): string {
  return `${px / root}rem`;
}

function convertPxToEm(px: number, root: number): string {
  return `${px / root}em`;
}
