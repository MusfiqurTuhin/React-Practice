# React-Practice

A collection of small React and TypeScript practice projects from a software engineering course, kept side by side in one repository. Each folder is its own app with its own `package.json`.

## Projects

| Folder | What it is | Tooling |
|---|---|---|
| `react-practice/` | Vite + React + TypeScript starter. `App` renders a `Message` component that shows "Hello, world!". | Vite |
| `my-app/` | A second copy of the same Vite starter. | Vite |
| `whatwecollect/` | A "What we collect" section built as a React component with a data file. | Create React App, Tailwind CSS |
| `Bhangariwala-SElab/my-app/` | A multi-page front end with Home, Login and Registration routes (React Router) and Home sub-sections: collect, impact, testimonials, work. | Create React App, TypeScript, Tailwind CSS |
| `SE_FrontEnd_Spring24` | A git submodule pointer. The repository has no `.gitmodules` file, so the folder is empty on clone. | n/a |

`react app create via vite command.txt` holds the author's notes on scaffolding a Vite app and a Create React App project.

## Tech stack

React 18, TypeScript (not in `whatwecollect/`, which mixes `.js` and `.tsx`), Vite 4, Create React App (`react-scripts` 5), Tailwind CSS 3, React Router.

## Install and run

Run these inside the project folder you want. The repository commits `package-lock.json` files; pnpm can import them.

Vite projects (`react-practice/`, `my-app/`):

```
pnpm install
pnpm run dev
pnpm run build
```

Create React App projects (`whatwecollect/`, `Bhangariwala-SElab/my-app/`):

```
pnpm install
pnpm run start
pnpm run build
pnpm run test
```

## Environment variables

None.

## Status

Learning exercises. There is no top-level app or shared tooling, and the only tests are the Create React App defaults.
