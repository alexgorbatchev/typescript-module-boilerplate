# typescript-module-boilerplate

This is a boilerplate module for a project that uses TypeScript as its main language. To use this boilerplate, clone, delete `.git` folder and begin your own. Maybe delete a few other extra files as necessary.

## Usage

```
git clone https://github.com/alexgorbatchev/typescript-module-boilerplate.git
cd typescript-module-boilerplate
npm install
```

## Testing

Uses Mocha, just do it!

```
npm test
```

## Linting

Full [ESLint](http://eslint.org/) support.

![](./screenshot-eslint.png)

* Integrates with Visual Studio Code.
* TypeScript support via [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser).
* Bundled with [AirBNB style guide](https://github.com/airbnb/javascript).
* `import/export` statements are verified via [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).

A few lint issues are left in the boilerplate intentionally for example purposes.

```
npm run lint
```

## Building

Use TypeScript straight up

```
rm -rf lib && tsc -p .
```

or a convenience shortcut

```
npm run build
```

## License

MIT
