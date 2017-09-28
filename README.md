# Gridium Developer Application

You can see this project running here http://gridium-board.surge.sh/

## Details

I decided to implement the assignment by creating a **Single Page Application** with **vanilla JS**. No dependencies have been used besides webpack to bundle all JS files.

The build consists of:
- 1 JavaScript file
- 1 CSS file
- 1 HTML file

The app structure is based on a single `Controller` which manages the job list and the single job displayer. Each element in the job list and in the single job displayer has been created as a component in separate files, where the whole component logic and rendering live.

The original `job` object has been turned into an array of `jobs` to allow the creation of a Job Board dedicated mainly to developer positions.

Some of the `jobs` attributes have been changed to allow an easier looping and a more dynamic label creation and overall better rendering.

## Run

To run the project:

1. clone repo `git clone https://github.com/throwaway-nf/frontend-developer.git`
2. run `npm i` to install all dependencies
3. run `npm start` to spin-up the server
4. visit http://127.0.0.1:8080/ to see the app running

## Development

Follow the instructions described [here](#run) and besides running `npm start` also run `npm run build` on a separate terminal window to allow webpack to bundle all the dependencies.