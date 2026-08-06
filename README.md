# typescript-module-boilerplate

A boilerplate template for TypeScript modules built with modern tooling including Bun, oxlint, oxfmt, and TypeScript.

## Stack

- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Type Checker:** [TypeScript](https://www.typescriptlang.org/) (`tsc`)
- **Linter:** [oxlint](https://oxc.rs/)
- **Formatter:** [oxfmt](https://oxc.rs/)
- **Test Runner:** `bun test`

## Usage

```bash
git clone https://github.com/alexgorbatchev/typescript-module-boilerplate.git my-module
cd my-module
rm -rf .git
bun install
bun test
```

## Script Commands

- `bun test` — Runs unit tests using Bun's native test runner.
- `bun run check` — Runs code formatting check (`oxfmt`), linting (`oxlint`), type checking (`tsc --noEmit`), and unused export checks (`ts-unused`).
- `bun run fix` — Formats all files using `oxfmt`.
- `bun run typecheck` — Validates TypeScript types without emitting output.
- `bun run build` — Compiles the bundle to `./dist` using `bun build` and generates declaration files (`.d.ts`).

## License

[MIT](LICENSE)
