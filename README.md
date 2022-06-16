# All comments and code for this website was built within the 4hr time limit dictated in the challenge's readme file.

My ideas and items completed are marked below:

# The REST API

JSON formatted to mimic an API that would not only retrieve the image url but an entire image object that includes various meta data like the alt text.

JSON-Server was used to allow realistic API usage on local environment with quick setup.

## Animations

Animtions completed with "Animation on Scroll" library.

### Bootstrap

Bootstrap framework was used to quickly build sliders and reversible column layouts with mostly classes so that readabiilty is improved.

#### Component Reusability & SCSS

All components made to be reusable and customizable to allow for various layouts.

Scss neatly organized to individual components. Only Typography and color theming is placed into the global App.scss. All website colors located in one colors.scss file and colors are imported to individual scss files when needed.

##### Running The Project Locally

To run this site locally use `npm install` for the dependencies and node modules.

Start the JSON Server with `npx json-server -w data/db.json -p 3500`. Port (3500) needs to be different from your default localhost.

Then use `npm start` in the terminal and the react site will load in your browser.

###### Things to improve

1. Completing the Nav & Footer ( duh )
2. Improve organization of the JSON data. Ideally, without the limitations of the challenge, I would place all content into a CMS and the data through a pre-existing API.
3. Utilize react-bootstrap library to reduce page load.
4. Minify images & use .webp formats for users with compatible browsers.
5. Proper loading animation, currently just static loading text.
