# hierarchy-view
A hierarchical directive for dispalying a parent-child relationship
## Dependencies
- Font-Awesome *(Optional)*

### Directive Implementation
Include `CSS` and `JavaScript` in your `index.html` file
```HTML
<link rel="stylesheet" href="./style.hierarchy-view.css" />
<script src="./hierarchyView.js"></script>
```

Placed the directive in your `HTML` and Configure
```HTML
<hierarchy-view node-data="nodeData" current-node="nodeData"></hierarchy-view>
```

##### A Single Node Example
```JavaScript
{
  nodeID : 1112, // - Number, String
  name : 'Tier 3-2', // - String
  icon : 'fa fa-hdd-o', // Option font-awesome icon - String
  callback : function (node) { // * Anymous function for callback - Function
    console.log(node); // node = node instance
  },
  children : [...] // Optional if node has children and children are in the node structure - Array (colleciton)
}
```

##### Data Example Defined in the `controller`
``` JavaScript
$scope.nodeData = {
  nodeID : 1000,
  name : 'Tier 1',
  icon : 'fa fa-server',
  callback : function (node) {
    onNodeClick(node);
  },
  children : [
    {
      nodeID : 1100,
      name : 'Tier 2-0',
      icon : 'fa fa-database',
      callback : function (node) {
        onNodeClick(node);
      }
    },{
      nodeID : 1101,
      name : 'Tier 2-1',
      icon : 'fa fa-database',
      callback : function (node) {
        onNodeClick(node);
      }
    },{
      nodeID : 1102,
      name : 'Tier 2-2',
      icon : 'fa fa-database',
      callback : function (node) {
        onNodeClick(node);
      },
      children : [
        {
          nodeID : 1110,
          name : 'Tier 3-0',
          icon : 'fa fa-hdd-o',
          callback : function (node) {
            onNodeClick(node);
          }
        },{
          nodeID : 1111,
          name : 'Tier 3-1',
          icon : 'fa fa-hdd-o',
          callback : function (node) {
            onNodeClick(node);
          }
        },{
          nodeID : 1112,
          name : 'Tier 3-2',
          icon : 'fa fa-hdd-o',
          callback : function (node) {
            onNodeClick(node);
          },
          children : [
            {
              nodeID : 11110,
              name : 'Tier 4-0',
              icon : 'fa fa-floppy-o',
              callback : function (node) {
                onNodeClick(node);
              }
            }
          ]
        }
      ]
    },{
      nodeID : 1103,
      name : 'Tier 2-3',
      icon : 'fa fa-database',
      callback : function (node) {
        onNodeClick(node);
      },
      children : [
        // no children
      ]
    }
  ]
};
```

Output

![logo](http://i.imgur.com/m6SRv1V.png)
