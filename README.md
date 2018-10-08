<img src="./public/images/pancakes.png" style="width: 50%">

# FlpJck

FlpJck is a repo that shows solution for Weave's __"Revenge of the Pancakes"__ code challenge.

## Code Overview

The code was written using `JavaScript` with modern ES6+ syntax.  The `JavaScript` isn't compiled, it's using JS modules in the browser to server up the code.

## Running Code

### Hosted Instance

To access the running code, you can view it at:

https://buttars.nyc3.digitaloceanspaces.com/flpjck/index.html

### Local Instance

To run this code locally you can:

1. Open the `index.html` file directly in a browser.  If you have any issues with `CORS` try option 2.
2. You can spin up a BrowserSync instance by installing all of the build dependencies by running `npm i`.  Once the dependencies are installed, run `npm start` to start the server.  Your default browser should open automatically with a running instance at `http://localhost:1111`.

### Without UI

To run the code without a UI and to manually input a `String`, see the following code:

```
import FlpJck from './src/index.js';

const str = `5
-
-+
+-
+++
--+-`;

FlpJck.run(str);
```

Include the script in an HTML page.  You will need to use the module syntax:

```
<script src="./demo.js" type="module"></script>
```

You should see the results appear in your browser console.

## Code Details

### src/index.js

The main file where everything is put together with the `FlpJck` object.

### src/cnfg.js

Some reusable configuration to set the dataset size and min and max settings so things can be changed quickly includings labels so it's easy to say pancakes instead of characters and stuff like that.

### src/cnvt.js

Used to convert the test string into a more usable object.

### src/err.js

Used to help push out an array of errors that can be pushed out to the console and/or UI.

### src/output.js

For helping to take an array/object of results and format it so it can be used in the UI.  It formats the results so they print out `Case #1: 1` or whatever the result is.

### src/stck.js

The Stck class that is used to contain each stack of pancakes with some internal methods that can help identify how many flips are required.  Methods such as `insertSpatula`, `flipTop`, `flipStack`, and `leaveStacked`.

### src/testData.js

A file that was used to help test the code as it all came together.

### src/txt.js

Used to manage all the text for error messages and other communication.

### src/ut.js

Some simple utility functions that are used throughout the application.

### src/vld8.js

All the necessary validation methods for each type of validation.

### public

Where all the icons and images are stored.

### demo.js

This is where the `FlpJck` object is run and where listeners are set up to make sure when the button is clicked the test strings are run.

### index.html

The HTML used for the demo.
