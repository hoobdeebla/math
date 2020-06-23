import AsciiMathParser from 'asciimath2tex';

const Parser = new AsciiMathParser();

export default (formula) => `$${Parser.parse(formula)}$`;
