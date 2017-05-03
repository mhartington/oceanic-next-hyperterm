"use strict";
// const backgroundColor = "#1b2b34";
const backgroundColor = "#14353e";
const foregroundColor = "#c0c5ce";

const colors = {
  black: backgroundColor,
  red: "#EC5f67",
  green: "#99C794",
  yellow: "#FAC863",
  blue: "#6699cc",
  magenta: "#C594C5",
  cyan: "#5FB3B3",
  gray: "#4f5b66",
  brightBlack: "#65737e",
  brightWhite: "#ffffff"
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: backgroundColor,
    cursorColor: foregroundColor,
    colors,

    css: `
			 ${config.css || ""}
				.term_fit  {
					padding: 0 !important;
				}
			.tab_active {
				border-bottom: thin solid ${colors.cyan} !important
			}
			`
  });
};

// css: `
// 	${config.css || ""}
// `
