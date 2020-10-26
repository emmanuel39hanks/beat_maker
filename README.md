---
name: 'Drum Pad'
description: 'Build a drumpad/beat maker in HTML/CSS & jQuery'
author: '@emmanuel39hanks'
---

# Creating a DrumPad/Beat Maker in HTML, CSS & jQuery

![Beat Maker Preview](https://i.ibb.co/r0JLpWB/Annotation-2020-09-20-200719.png)

_Preview of the DrumPad/Beat Maker we are going to be creating._

In this workshop, you're going to create a drum pad/beatmaker that plays sounds in less than 230 lines of code.

[Link to demo](https://BeatMaker.emmanuel39hanks.repl.co)

## Getting started

We will be using HTML, CSS & jQuery(a JavaScript library used to change elements on a webpage https://jquery.com/).

We will get started by creating an HTML/CSS & JavaScript project on repl.it (https://repl.it/). Once your project is  set up, navigate to your `index.html` file. Then, inside of our `<head>` tag, import jQuery:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`

Great! Now that we've imported jQuery, we're ready to start writing our code.

## Creating the pad layout

We are going to start writing HTML code; going into our `<body>` tag, which is where we write code that will be shown to the client, create a header with the `<h1>` tag, and then we will have 3 rows, and 4 columns of pads and each pad will be a `<div>,` you can think of the `<div>` tag as a box or container.

```html
<h1>BEAT MAKER</h1>

<div>
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>

  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>

  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
</div>
```

![Preview of HTML with no CSS](https://i.ibb.co/72XvNn3/Annotation-2020-09-20-204442.png)

And if we run our code, it should look like this.
Not so compelling, right? We will now write some CSS, which will style our HTML document and make our Beat Maker look prettier, let's do that.

Just before the end of your `<head>` tag, link your CSS file:

```html
<link rel="stylesheet" href="style.css" />
```

Your CSS file should now be linked, and we can start writing our CSS code.

We're going to start by writing code for our document to change the colors, adding fonts, height, width, etc. We are also going to be using a custom font, so to do that at the top of our CSS file, we will import it using the line `@import 'https://fonts.googleapis.com/css?family=Roboto';`

```css
@import 'https://fonts.googleapis.com/css?family=Roboto';
html,
body {
  background-color: #fff; // Changes the background of our web page to #fff which is white in hexidecimal values.
  height: 100%; // The height CSS property specifies the height of an element.
  width: 100%; // The width CSS property specifies the width of an element.
  display: flex; // The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
  flex-direction: column; // The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
  justify-content: center; // The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
  align-items: center; // The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.
  overflow: hidden; // The CSS overflow property controls what happens to content that is too big to fit into an area. 
  font-family: 'Roboto', sans-serif; // The CSS font family property is used to specify a list of prioritized fonts and generic family names
}
```

![Preview of HTML with CSS applied, to change the layout](https://i.ibb.co/qgY3jCv/Annotation-2020-09-20-210409.png)

The major thing you will notice when we run our code this time is that our content has been aligned to the center.

We want to style the header to give it spaces and then create 3 rows and 4 columns to perfectly align the pads and give them a box or container look. We will do just that.

```css
h1 {
  color: #000; // The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.
  font-size: 5vw; // The font-size CSS property sets the size of the font.
  letter-spacing: 6px; // The letter-spacing CSS property sets the horizontal spacing behavior between text characters.
}
.pad {
  width: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; // The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
}

.box {
  width: 100px;
  height: 100px;
  margin: 10px 0;
  box-shadow: 0 8px 6px -6px black;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.4);
  user-select: none;
  border: 2px solid; // Adds a solid 2 pixel border around our box
}

```

If you run your code nothing has changed, that's because we are using classes to group our HTML elements, let's go back to our `index.html` and to our `<div>` we will want add class names to our elements:

```html
<div class="pad">
    <div class="box pad-1" style="background-color: #E5446D">A</div>
    <div class="box pad-2" style="background-color: #44aae5">B</div>
    <div class="box pad-3" style="background-color: #e044e5">C</div>
    <div class="box pad-4" style="background-color: #4f97c7">D</div>

    <div class="box pad-5" style="background-color: #7fe544">E</div>
    <div class="box pad-6" style="background-color:#e56444">F</div>
    <div class="box pad-7" style="background-color: #44e595">G</div>
    <div class="box pad-8" style="background-color: #11b619">H</div>

    <div class="box pad-9" style="background-color:#44e559">I</div>
    <div class="box pad-10" style="background-color:#3679df">J</div>
    <div class="box pad-11" style="background-color: #df581a">K</div>
    <div class="box pad-12" style="background-color: #ff0496">L</div>
</div>
```

![Preview of HTML with layout CSS applied, the pads are in a grid but all gray](https://i.ibb.co/TLFcmvk/aasdasd.png)
And when we rerun our code, it should look like this.

We are now going to add colors, make hovering effects, inactive or active states, to make it stand out and make the experience better. We will do that with the following code:

```css
// Below we are using pseudo-classes to determine the form of states whether active or hovered.
// The :hover CSS pseudo-class matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor (mouse pointer).
.box:hover {
  background-color: lighten(#444, 10%);
  cursor: pointer; // The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
}
// The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user. When using a mouse, "activation" typically starts when the user presses down the primary mouse button.
.box:active {
  background-color: darken(#444, 10%); // The darken() function helps us give our element a color and a percentage of darkness that should be applied to it.
  transform: scale(1.1); // The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model, and the scale() function helps easily give a scale value to our element.
  transition: all 0.2s; // CSS transitions allows you to change property values smoothly, over a given duration.
}
.active {
  background-color: darken(#444, 10%);
  transform: scale(1.1);
  transition: all 0.2s;
}
```

![Preview of HTML with our finished layout CSS applied, and our pads colored](https://i.ibb.co/LpYQY6N/asdasdasdasdasdasd.png)


## Adding sound with JS

And finally, we are done with our CSS. It now looks good, but when you click on the buttons we have no sound. We need to write our JavaScript/jQuery code that will get us sound.

This conversation was marked as resolved by emmanuel39hanks
Navigate to the `index.html` file. Then, just before the end of your `<body>` tag, import your `script.js` file that will be used when our document loads:

```html
<script src="script.js"></script>
```

We will then start writing our jQuery code in `script.js.`

We will start by checking if the document is ready so we can perform our script instructions:

```javascript
$(document).ready(function () {})
```

And in the function above inside is where we will write all our code. What we will do is create 12 variables that will hold sound files hosted on AWS (Amazon Web Services), don't worry, you won't need to host your files by yourself. You can use mine.

After creating a variable, we will use the Audio class to make our variable an object. The Audio class comes with the jQuery library.

```javascript

```

We are almost done—all we need to do is use the jQuery selector (`$`) to select classes and check for actions. We want to load and play a sound when the mouse key is down, which we can implement like this:

```javascript

```

## Publishing

Once you're done, how about sharing it in Hack Club's Slack ship channel? And also with me on Slack @emmanuel39hanks.

## Resources

- jQuery Scripting API Docs (https://api.jquery.com/)
- HTML Docs (https://www.w3schools.com/html/)
- CSS Docs (https://www.w3schools.com/css/)
- JavaScript Docs (https://www.w3schools.com/js/)
- Audio Object (https://www.w3schools.com/JSREF/dom_obj_audio.asp)

## Inspiration

To finish, here are some amazing, more customized drum pad machines/beatmakers made by other developers:

- A code playground on Solo Learn by Andrew Siachos (https://code.sololearn.com/WfYyBdZwc6qn/#html)
- Music Pad Controller with Keyboard (https://endertech.com/blog/music-pad-javascript-html-css)
- My favorite one is by Dev Ed, Make Music with JavaScript by on Youtube(https://www.youtube.com/watch?v=8T4SCksjrQ4).

We are done with our workshop, and you can go ahead, customize it, and add more things to it. I hope you enjoyed this workshop, happy hacking!