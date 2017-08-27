const ahex = (ahex, object = false) => {
  //remove # from the beginning
  ahex = ahex.substring(1, ahex.length);
  ahex = ahex.split('');
  //RGBA
  let r = ahex[0] + ahex[0];
  let g = ahex[1] + ahex[1];
  let b = ahex[2] + ahex[2];
  let a = ahex[3] + ahex[3];
  //RRGGBBAA
  if (ahex.length >= 6) {
    r = ahex[0] + ahex[1];
    g = ahex[2] + ahex[3];
    b = ahex[4] + ahex[5];
    a = ahex[6] + (ahex[7] ? ahex[7] : ahex[6]);
  }

  int_r = parseInt(r, 16);
  int_g = parseInt(g, 16);
  int_b = parseInt(b, 16);
  int_a = parseInt(a, 16);


  int_a = int_a / 255;

  if (int_a < 1 && int_a > 0) int_a = int_a.toFixed(2);

  if (object) return {
    r: int_r,
    g: int_g,
    b: int_b,
    a: int_a
  };
  if (int_a || int_a === 0)
    return `rgba(${int_r}, ${int_g}, ${int_b}, ${int_a})`;
  return `rgb(${int_r}, ${int_g}, ${int_b})`;
}

module.exports = ahex;
