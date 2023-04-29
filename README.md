# Star Wars Clone

This project is developed for Patika.dev FMSS Bilişim Front-end Practicum Final Case assignment.

I aimed to develop a production-grade application so I developed this project using Next.js and Typescript.

Next/Image optimizes images with lazy loading.

All module css files in `styles` folder.

I used SWAPI for Star Wars data. SWAPI does not provide any image because of that I used `data/Image.json` file that holds Image URL data.

I implemented SSG (Static-site generation) in Starship Detail pages using `getStaticProps()` and `getStaticPaths()` from Next.js

Layout is fully responsive and mobile compatible.

## Features

- Listing sharships
- Search among starships
- Read details of a specific starship
- Load more starships with a load more button

## Used Libraries

- React
- Next.js, Next/Router
- Axios
- React Icons

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Static-site generation doesn't work on development mode, we generate starship detail pages as static html files.

Install NPM packages

```
npm install
```

Build app for production

```
npm run build
```

Start app in production mode

```
npm run start
```
