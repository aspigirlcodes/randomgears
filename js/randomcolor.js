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
