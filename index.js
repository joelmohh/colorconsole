const styles = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    reverse: "\x1b[7m",
    strikethrough: "\x1b[9m",

    // Text Colors
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    lightRed: "\x1b[91m",
    lightGreen: "\x1b[92m",
    lightYellow: "\x1b[93m",
    lightBlue: "\x1b[94m",
    lightMagenta: "\x1b[95m",
    lightCyan: "\x1b[96m",
    lightWhite: "\x1b[97m",

    // Background Colors
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",
    bgGray: "\x1b[100m",
    bgLightRed: "\x1b[101m",
    bgLightGreen: "\x1b[102m",
    bgLightYellow: "\x1b[103m",
    bgLightBlue: "\x1b[104m",
    bgLightMagenta: "\x1b[105m",
    bgLightCyan: "\x1b[106m",
    bgLightWhite: "\x1b[107m",
};

function hexToAnsi(hex, isBg = false) {
    hex = hex.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `\x1b[${isBg ? 48 : 38};2;${r};${g};${b}m`;
}

function applyStyles(text, ...styleNames) {
    const prefix = styleNames
        .map(name => styles[name] || "")
        .join("");
    return `${prefix}${text}${styles.reset}`;
}

function cc() {
    return {
        log(styleList, text) {
            if (!Array.isArray(styleList)) styleList = [styleList];
            console.log(applyStyles(text, ...styleList));
        },

        style(...styleList) {
            return styleList.map(s => styles[s] || "").join("");
        },

        hex(hexCode, text, { bg = false, bold = false } = {}) {
            const colorCode = hexToAnsi(hexCode, bg);
            const boldCode = bold ? styles.bold : "";
            console.log(`${boldCode}${colorCode}${text}${styles.reset}`);
        },
    };
}

module.exports = cc;
