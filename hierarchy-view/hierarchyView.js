(function() {
    'use strict';
    angular.module('portlet.io.hierarchy', []).factory('RecursionHelper', function($compile) {
        return {
            /**
             * Manually compiles the element, fixing the recursion loop.
             * @param element
             * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
             * @returns An object containing the linking functions.
             */
            compile: function (element, link) {
                if (angular.isFunction(link)) {
                    link = {post: link};
                }
                var contents = element.contents().remove();
                var compiledContents;
                return {
                    pre: (link && link.pre) ? link.pre : null,
                    post: function (scope, element) {
                        if (!compiledContents) {
                            compiledContents = $compile(contents);
                        }
                        compiledContents(scope, function (clone) {
                            element.append(clone);
                        });
                        if (link && link.post) {
                            link.post.apply(null, arguments);
                        }
                    }
                };
            }
        };
    }).controller('hierarchyViewController', function(RecursionHelper) {
        var vm = this;
        vm.onNodeClick = function(node) { // Click handler for node items
            node.callback(node);
        };
    }).directive('hierarchyView', function(RecursionHelper) {
        return {
            restrict: "E",
            scope: {
                parent: '=nodeData',
                currentNode: '=currentNode'
            },
            controller : 'hierarchyViewController',
            controllerAs : 'ctrl',
            templateUrl : '../hierarchy-view.html',
            //templateUrl : function (element, attrs) {
            //    return attrs.templateUrl 
            //}
            transclude : true,
            compile : function(element) {
                return RecursionHelper.compile(element);
            }
        }
    });
}());
