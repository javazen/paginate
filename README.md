# paginate

AFAIK SVG does not do page breaks, but here is a link to an approach that help with pagination: https://codepen.io/AmeliaBR/details/jKxJz/

The idea is "re-using the same graphic within multiple SVG elements, using the viewBox attribute to define which part of the graphic should be visible each time". It's a little complicated, but if you look at the code, pay attention to the css, especially the "screen styles" part, you can get it to work. Here's a somewhat abridged version - in Chrome (haven't tested with others) when you Print the page it divides it into 4 page-sized blocks...
