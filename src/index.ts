export default function func(options: Object): Function {
  return function fooBar() {
    const foo = 1;
    return foo;
  };
}
