(function () {
    'use strict';
    angular.module('portlet.io.dynamictable', []).controller('dynamicTableController', function ($scope, $log) {
        var vm = this;
        vm.onRowClicked = function (callback) {
            try {
                callback(this.row);
            } catch (error) {
                $log.error(error);
            }
        };
    }).directive('dynamicTable', function ($log) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                scrollBody : '=',
                data : '=tableData',
                sortBy : '='
            },
            //controller : 'dynamicTableController',
            //controllerAs : 'ctrl',
            templateUrl : '../dynamic-table.html',
            link : function (scope, element, attrs) {
                scope.onRowClicked = function (callback) {
                    try {
                        callback(this.row);
                    } catch (error) {
                        $log.error(error);
                    }
                };
            }
        };
    });
    /* -- DATA EXAMPLE --
    
    vm.lookupResults = {columns : [], rows: [], keys: [], rowClickHandler : yourScopeControllerFunction};
    vm.lookupResults.rows = data.DATA.ROWS;
    vm.lookupResults.columns = _.map(_.sortBy(data.COLUMNS, function(item) {
        if(item.LABEL !== undefined) {
            vm.lookupResults.keys.push(item.ID);
        }
        return item.ORDER;
    }), "LABEL");
    
    */
}());