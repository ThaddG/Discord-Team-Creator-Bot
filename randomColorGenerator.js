exports.randomColorGenerator = function() {
  const colorAlphabet = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let text = '#';
  for (let i = 0; i < 6; i++) {
    text += colorAlphabet[Math.floor(Math.random() * (colorAlphabet.length-0) + 0)];
  }
  return text;
}