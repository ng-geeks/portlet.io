(function () {
    'use strict';
    angular.module('portlet.io.hierarchy', []).factory('RecursionHelper', function ($compile) {
        return {
            compile: function (element, link) {
                if (angular.isFunction(link)) {
                    link = {post: link};
                }
                var contents = element.contents().remove(), compiledContents;
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
    }).controller('hierarchyViewController', function (RecursionHelper) {
        var vm = this;
        vm.onNodeClick = function (node) {
            node.callback(node);
        };
    }).directive('hierarchyView', function (RecursionHelper) {
        return {
            restrict: "E",
            scope: {
                parent: '=nodeData',
                currentNode: '=currentNode'
            },
            controller : 'hierarchyViewController',
            controllerAs : 'ctrl',
            template:   '<ul class="hierarchy-tree">' +
                            '<li class="parent node" ng-class="{\'active\' : parent == currentNode }">' +
                                '<i ng-if="parent.icon" class="{{::parent.icon}}"></i> <a href class="node-name" ng-class="{\'active\' : parent == currentNode}" ng-click="ctrl.onNodeClick(parent)">{{ parent.name }}</a>' +
                                '<ul class="branch" ng-if="parent.children.length > 0">' +
                                    '<li class="node" ng-repeat="child in parent.children">' +
                                        '<hierarchy-view node-data="child" current-node="currentNode"></hierarchy-view>' +
                                    '</li>' +
                                '</ul>' +
                            '</li>' +
                        '</ul>',
            transclude : true,
            compile : function (element) {
                return RecursionHelper.compile(element);
            }
        };
    });
}());
