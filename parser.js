const Op = Symbol('op');
const Num = Symbol('num');

const parse = tokens => {

  let c = 0;

  const peek = () => tokens[c];
  const consume = () => tokens[c++];

  //Get the next value of tokens and parse to Num
  const parseNum = () => ({ val: parseInt(consume()), type: Num });

  //No validation for unexpected tokens
  const parseOp = () => {
    const node = { val: consume(), type: Op, expr: [] };
    while (peek()) node.expr.push(parseExpr()); //Yeah recursion!
    return node;
  };

  //Regex check to see if current token is a number -> call parseNum else call parseOp
  const parseExpr = () => /\d/.test(peek()) ? parseNum() : parseOp();

  return parseExpr();
};
