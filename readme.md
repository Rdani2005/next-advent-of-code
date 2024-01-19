# Next Advent Of Code

This project is a frontend designed to display the results of Advent of Code problems through a corresponding backend. The main idea is to provide a user-friendly interface for visualizing and exploring solutions to Advent of Code challenges.

you can [find the repository here](https://github.com/Rdani2005/next-advent-of-code)

# Technologies Used

The project is developed using [Next.js](https://nextjs.org/), a [React](https://es.react.dev/) framework that allows for efficient web application development.

# Project Setup

1. Clone the repository

```bash
git clone https://github.com/rdani2005/next-advent-of-code
```

2. Install Dependencies

```bash
cd next-advent-of-code
npm install
# or using yarn
yarn install
```

3. Configure Backend

    - Ensure that the backend is installed and configure. You can find it [here](https://github.com/Rdani2005/GolangAdventOfCode)

4. Run the Application

```bash
npm run dev
# or using yarn
yarn dev
```

The Application Will Be Running at [localhost:3000](http://localhost:3000)

## Docker Set Up

You can use this project with Docker. To do it, follow the next guide:

### Building container for image

1. Build the docker image

```bash
docker build -t next-advent-of-code .
```

2. Run the container

```
docker run -p 3000:3000 next-advent-of-code
```

After this, the Application should Be Running at [localhost:3000](http://localhost:3000)

## Pushing from existance container

You can push from an existance container on docker hub. To do so, you should follow this guide:

1. Pull and run the container

```bash
 docker run -p 3000:3000 rdani2005/next-advent-of-code:latest
```

After this, the Application should Be Running at [localhost:3000](http://localhost:3000)

## Usage

Once the application is up and running, you can access the results of Advent of Code problems. The intuitive interface allows you to navigate and explore solutions provided by the backend.
