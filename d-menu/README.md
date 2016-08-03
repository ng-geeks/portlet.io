# d-menu
A dynamic collapsing menu
## Dependencies
- ui.router
- ngAnimate (Required if using animations)
- Font-Awesome or Glyphicons (Optional)

##### Example with ALL options with default values
```JavaScript
var dMenu = {
  collapsed : false, // Boolean - Collapses the navigation (includes responsive CSS)
  useSearch : true, // Boolean - Toggles the search inbox for the menu
  tooltips: true, // Boolean - Toggles usage of mouseover tooltips for menu items only when the menu is collapsed (collapsed = true)
  useAnimation : true // Boolean - Toggles the usage of CSS-based animations
  data : [...], // Collection - The data for the menu
  colors : { // Object (Optional) - Specifications of custom colors for the menu and various states
    base : '#XXXXXX', // The base background color of the menu
    color : '#XXXXXX', // The initial color of text and icons
    hover : '#XXXXXX', // The background color of a hovered item
    hoverColor : '#XXXXXX', // The color of text and icons when hovered
    activeParent : '#XXXXXX', // The background color of an active parent item
    activeChild : '#XXXXXX', // The background color of an active child item
    activeColor : '#XXXXXX' // THe color of text and icons when active
  }
  callback : function (item) { // * Anymous function for callback - Function
    console.log(item); // node will be the node instance
};
```

##### Example of menu data
```JavaScript
[
  {
    label : 'Dashboards', // String - Label of the menu item/group
    route : null, // String - the route which the menu item will navigate to. If null, the node will be a "Menu Group"
    routeOptions : null // Object - ui.router $state.go() options. If null, no options will be passed
    routeParams : null // Object - ui.router $state.go() parameters for the route. If null, no params will be passed
    icon : 'fa fa-tachometer' // String - Font-Awesome or glyphicon to use
    children : [] // Collection - Routes for children
  }
]
```
