export default function func(options: Object): Function {
  return function fooBar() {
    let foo = 1;

    if (options) {
      foo = 2;
    }

    return foo;
  };
}
