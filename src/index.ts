interface Params {
  isValid: boolean;
}

export default function func({ isValid }: Params) {
  let foo = 1;

  if (isValid) {
    foo = 2;
  }

  return foo;
}
