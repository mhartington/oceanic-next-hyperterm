'use strict';
const foregroundColor = '#c0c5ce';
const backgroundColor = '#1B2B34';
const black = backgroundColor;
const red = '#EC5f67';
const green = '#99C794';
const yellow = '#FAC863';
const blue = '#56699CC';
const magenta = '#C594C5';
const cyan = '#5FB3B3';
const gray = '#4f5b66';
const brightBlack = '#65737e';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: backgroundColor,
		cursorColor: foregroundColor,
		colors: [
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(255, 106, 193, 0.25);
			}
		`
	});
};
