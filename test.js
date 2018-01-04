const program = 'mul 3 sub 2 sum 1 3 4';

//parse str with lexer -> parse it -> transpile it -> return JS output as string
const test = str => transpile(parse(lex(str)));

const test2 = () => transpile(parse(lex(program)));
// (3 * (2 - (1 + 3 + 4)))
