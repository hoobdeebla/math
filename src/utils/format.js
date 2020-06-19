import AsciiMathParser from 'asciimath2tex';
const Parser = new AsciiMathParser();

const Format = (formula) => `$${Parser.parse(formula)}$`;
export default Format;
