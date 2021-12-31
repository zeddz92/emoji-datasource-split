# emoji-datasource-split sprite image sub divided into 12x12 grid

This project uses [emoji-datasource](https://www.npmjs.com/package/emoji-datasource) images.

The purpose of this project is to make it easy to lazy load group of emojis instead of loading all at once. Each part has 25 emojis each.

# Installation

This package includes 64px spritesheets for apple, google, facebook and twitter

```
npm install emoji-datasource-split
```

Each chunk has a size between `32.4kB` and `210kB`

# Usage

Every grid has 5 rows and 5 columns of emojis, but index start from 0 to 4.

```
x: sheet_x * (100 / 4) // 4 = columns
y: sheet_y * (100 / 4) // 4 = rows
background-image: "emoji-1-1.png"
background-size: 165px 165px;
```

The height and width of each chunk is `330x330` so the background-size is half of it

### Example of grid 5x5

<div style="display: flex; margin-bottom: 10px; margin-top: 10px;">
<img style="width:49%; border-right: 1px solid;"; src="https://raw.githubusercontent.com/zeddz92/emoji-datasource-split/main/img/sheets-clean/64/apple/emoji-2-7.png"/>
<img style="width:49%"; src="https://raw.githubusercontent.com/zeddz92/emoji-datasource-split/main/img/sheets-clean/64/apple/emoji-7-3.png"/>
</div>

## Grid image

The way is named is like this: `emoji-1-1.png`. The first number is the row and the latter is the column.

## Object

The new list adds `img` property and changes `sheet_x` and `sheet_y` so to be found in the grid in the `img`

```
{
    "name": "HASH KEY",
    "unified": "0023-FE0F-20E3",
    "non_qualified": "0023-20E3",
    "docomo": "E6E0",
    "au": "EB84",
    "softbank": "E210",
    "google": "FE82C",
    "image": "0023-fe0f-20e3.png",
    "sheet_x": 0,
    "sheet_y": 0,
    "short_name": "hash",
    "short_names": [
      "hash"
    ],
    "text": null,
    "texts": null,
    "category": "Symbols",
    "subcategory": "keycap",
    "sort_order": 1463,
    "added_in": "0.6",
    "has_img_apple": true,
    "has_img_google": true,
    "has_img_twitter": true,
    "has_img_facebook": false,
    "img": "emoji-1-1.png"
  },
```
