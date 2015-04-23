(function() {
    'use strict';
    angular.module('pfmApp') .directive('hierarchyView', function(RecursionHelper, $log) {
        return {
            restrict: "E",
            scope: {
                parent: '=nodeData',
                currentNode: '=currentNode'
            },
            controller: function() {
                var vm = this;
                vm.onNodeClick = function(node) { // Click handler for node items
                    node.callback(node);
                };
            },
            controllerAs: 'ctrl',
            transclude: true,
            templateUrl:'./views/directives/hierarchy-view.html',
            compile: function(element) {
                return RecursionHelper.compile(element);
            }
        }
    });
}());
