const nums = [5];

const areaOfRectangle = (length = 1, width = 1) => {
  return length * width;
};

console.log(areaOfRectangle(...nums));
