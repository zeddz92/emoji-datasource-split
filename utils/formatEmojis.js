const fs = require("fs");

const emojis = require("./emoji_original");
const customEmojis = require("./emoji_custom_original");

const result = [];

for (let i = 0; i < emojis.length; i++) {
  const emoji = emojis[i];

  if (emoji.sheet_y % 5 === 0) {
    row = emoji.sheet_y / 5;
    sheetY = emoji.sheet_y - row * 5;
  }
  if (emoji.sheet_x % 5 === 0) {
    column = emoji.sheet_x / 5;
    sheetX = emoji.sheet_x - column * 5;
  }

  const sheet_y = emoji.sheet_y - row * 5;
  const sheet_x = emoji.sheet_x - column * 5;

  result.push({
    ...emoji,
    img: `emoji-${row + 1}-${column + 1}.png`,
    sheet_y,
    sheet_x,
  });
}

const resultCustom = customEmojis.reduce((acc, emoji) => {
  const data = result.find(
    ({ name }) => name.toLowerCase() === emoji.name.toLowerCase()
  );
  if (data) {
    acc.push({
      ...emoji,
      sheetX: data.sheet_x,
      sheetY: data.sheet_y,
      img: data.img,
    });
  }
  return acc;
}, []);

fs.writeFile("emoji.json", JSON.stringify(result, null, 2), "utf8", () => {});

fs.writeFile(
  "emoji_custom.json",
  JSON.stringify(resultCustom, null, 2),
  "utf8",
  () => {}
);
