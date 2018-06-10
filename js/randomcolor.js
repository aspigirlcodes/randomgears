/* Based on https://gist.github.com/bendc/76c48ce53299e6078a76 */

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColor = (() => {
  "use strict";

  return () => {
    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(40, 75);
    return `hsl(${h},${s}%,${l}%)`;
  };
})();
