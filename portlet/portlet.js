(function() {
    'use strict';

    var  portlet = function() {
        return {
            restrict: 'E',
            templateUrl: './views/directives/portlet.html',
            transclude: true,
            scope: {
                title : '@portletTitle',
                caption : '@portletCaption',
                actions : '@actionsTemplate',
                tabs : '@tabsTemplate',
                titleClass : '@',
                icon : '@portletIcon',
                vm : '=viewModel',
                includeBottomActions : '=includeBottomActions',
                bottomDynamicButtons : '=bottomDynamicButtons',
                bottomButtonsOffset : '@bottomButtonsOffset',
                showFooterSpinner : '=showFooterSpinner',
                showSpinner : '=showSpinner',
                dropdownData : '=dropdownData',
                dynamicButtons : '=dynamicButtons',
                dynamicActions : '=dynamicActions'
            },
            link: function(scope, element, attrs) {
                scope.onActionItemClicked = function(item) { // Click handler for dynamic items
                    item.callback();
                };
            }
        };
    };

    angular.module('myApp')
        .directive('portlet', portlet);
}());
