# Calendar Plugin

Simple calendar plugin with plain javascript.

Live Demo: https://cengizhanpece.github.io/calendarPlugin/
## Getting Started

Follow these instructions if you want to use this plugin on your local machine

### Installing
  First download the css and js files
  Then copy the files into your project files
  Then import these source codes into your project codes
  
   ```
   
     <link rel="stylesheet" type="text/css" href="calendar.css">
     <script src="calendar.js"></script>
     
   ```
### Usage 

Then you can use calendar class for turning your existing input element to calender
```

let calendar = new Calendar({
    element: document.getElementById("elementID"), 
    width: 300, // optional
    height: 275, // optional
    dateSeparator: "/", // optional
    disabledDays: [[13, 7, 2020], [14, 7, 2020], [15, 7, 2020]], // optional
    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] // optional
});

```

### Paramaters

```

 element: refers to html dom element ( must be input type="text" element ),
 
 width: calendar width ( min and default width 300 ),
 
 height: calendar height ( min and default height 275 ),
 
 dateSeperator: formatting date ( default is "/" ) example: DD / MM / YY,
 
 disabledDays: array of disabled days must be [DD, MM, YY] like format and without 0 example: 01/07/2020 = [1,7,2020],
 
 dayNames: refers to shortened day names ( default is turkish ) 
 
```
