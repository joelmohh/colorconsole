# 🎨 ConsoleColor 
> - Style your terminal with elegance and HEX colors <br>
> - **ConsoleColor** is a modern library for coloring and styling terminal output with **ANSI, HEX, and RGB** codes. <br>
> - It offers a **lightweight, expressive, and chainable API** for Node.js.

![npm version](https://img.shields.io/npm/v/@joelmo/console-color)
![npm downloads](https://img.shields.io/npm/dt/@joelmo/console-color)
![license](https://img.shields.io/github/license/joelmohh/colorconsole)

## 🚀 Installation
Open your command prompt and paste the following command:
```bash
 npm i @joelmo/console-color
```
## ⚡ Basic Usage

```js
import cc from "@joelmo/console-color";

// Simple colored text
cc().log('red', 'Red text!');

// Multiple styles
cc().log(['bgYellow', 'blue', 'bold'], 'Blue text on yellow background');

// HEX color (text)
cc().hex('#FF00FF', 'Magenta text');

// HEX color (background + bold)
cc().hex('#00FFCC', 'Text with turquoise background', { bg: true, bold: true });

// Direct ANSI styling
console.log(cc().style('underline', 'cyan') + 'Underlined cyan text' + '\x1b[0m');
```

## 🧩 API Reference

`cc().log(styles, text)` 
- Prints text with one or more combined styles. 
```js
cc().log(['bgRed', 'red', 'bold'], '[ERROR] Critical Error!');
```

`cc().style(...styles)`
- Returns only the ANSI style sequence (does not print).
- Useful for custom formatting and composition.
```js
console.log(cc().style('bold', 'underline', 'cyan') + 'Custom text' + '\x1b[0m');
```
`cc().hex(hex, text, options)`
- Applies a custom HEX or RGB color dynamically.
  
| Parameter      | Type      | Description                         |
| -------------- | --------- | ----------------------------------- |
| `hex`          | `string`  | Color in `#RRGGBB` or `#RGB` format |
| `text`         | `string`  | The text to display                 |
| `options.bg`   | `boolean` | Apply as background color           |
| `options.bold` | `boolean` | Apply bold style                    |

Examples:
```js
cc().hex('#FFAA00', 'Orange text');
cc().hex('#00FF00', 'Green text with background', { bg: true, bold: true });
```

# 💅 Available Styles
### 🎨 Text Colors
| Name           | Description    |
| -------------- | -------------- |
| `black`        | Black          |
| `red`          | Red            |
| `green`        | Green          |
| `yellow`       | Yellow         |
| `blue`         | Blue           |
| `magenta`      | Magenta        |
| `cyan`         | Cyan           |
| `white`        | White          |
| `gray`         | Gray           |
| `lightRed`     | Bright red     |
| `lightGreen`   | Bright green   |
| `lightYellow`  | Bright yellow  |
| `lightBlue`    | Bright blue    |
| `lightMagenta` | Bright magenta |
| `lightCyan`    | Bright cyan    |
| `lightWhite`   | Bright white   |

### 🖼️ Background Colors
| Name             | Description              |
| ---------------- | ------------------------ |
| `bgBlack`        | Black background         |
| `bgRed`          | Red background           |
| `bgGreen`        | Green background         |
| `bgYellow`       | Yellow background        |
| `bgBlue`         | Blue background          |
| `bgMagenta`      | Magenta background       |
| `bgCyan`         | Cyan background          |
| `bgWhite`        | White background         |
| `bgGray`         | Gray background          |
| `bgLightRed`     | Light red background     |
| `bgLightGreen`   | Light green background   |
| `bgLightYellow`  | Light yellow background  |
| `bgLightBlue`    | Light blue background    |
| `bgLightMagenta` | Light magenta background |
| `bgLightCyan`    | Light cyan background    |
| `bgLightWhite`   | Bright white background  |

### ✨ Text Formatting Styles
| Name            | Effect            |
| --------------- | ----------------- |
| `bold`          | **Bold text**     |
| `dim`           | Faint text        |
| `italic`        | *Italic text*     |
| `underline`     | Underlined text   |
| `reverse`       | Inverted colors   |
| `strikethrough` | ~~Strikethrough~~ |

## 🌈 Custom HEX / RGB Colors
Supports any valid HEX color:
```js
cc().hex("#ff0000", "Red");
cc().hex("#00ff00", "Green");
cc().hex("#0099ff", "Light Blue");
cc().hex("#ff00ff", "Magenta");
cc().hex("#222222", "Dark Gray", { bg: true });
```

## 🔧 Advanced Usage
You can manually build styles using .style():

```js
const { style } = cc();

console.log(style('bold', 'bgCyan', 'black') + 'Custom styled text' + '\x1b[0m');
```

Or predefine reusable patterns:
```js
const warning = cc().style('bgYellow', 'black', 'bold');
console.log(`${warning}WARNING!${cc().style('reset')}`);
```
## 🧾 License

MIT License © [Joelmo](https://github.com/joelmohh/)
## 💬 Feedback

⭐ Star the repo on [GitHub](https://github.com/joelmohh/colorconsole)

🐛 Found a bug? [Open an issue](https://github.com/joelmohh/colorconsole/issues)

💡 Have an idea? Contributions and pull requests are welcome!


