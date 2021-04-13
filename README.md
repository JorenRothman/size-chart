# Size Chart
Easily generate a size chart with given sizes and coordinates.

## Install
Simply run the following command in your project
```
npm install size-chart
```

## Usage
Get an image you want to overlay with sizes, find the coordinates for every center point you want text to appear (coordinates are measured from the top left corner).

Create an target img tag with an unique ID
```html
<img id="my-size-chart" src="" alt="size-chart" />
```

Import the package
```js
import createSizeChart from 'size-chart';
```

Create your configuration like so:
```js
createSizeChart({
    targetImageID: 'my-size-chart',
    image: {
        url:
            'your-image-url',
        width: 591,
        height: 576,
    },
    positions: [
        {
            size: 80,
            x: 285,
            y: 48,
        },
        {
            size: 70,
            x: 285,
            y: 198,
        },
        {
            size: 100,
            x: 515,
            y: 278,
        },
        {
            size: 60,
            x: 65,
            y: 328,
        },
    ],
});
```
Now you have an responsive size chart (or image with text over it).

## Extra
If you want to lazy generate an size chart you can!

Just set the lazy option to true.
```js
const generate = createSizeChart({
    lazy: true,
})
```

And then to generate the size chart simply call the function
```js
generate()
```
