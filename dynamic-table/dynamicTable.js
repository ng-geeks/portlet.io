(function () {
    'use strict';
    angular.module('myApp').directive('dynamicTable', function($log) {
        return {
            restrict: 'EA',
            templateUrl: './views/directives/dynamic-table.html',
            transclude: true,
            scope: {
                scrollBody: '=scrollBody',
                data: '=tableData',
                vm: '=viewModel'
            },
            link: function(scope, element, attrs) {
                scope.onRowClicked = function(callback) { // Click handler rows
                    try {
                        callback(this.row);
                    }
                    catch(error) {
                        $log.error(error);
                    }
                }
            }
        }
    });
    /*
    *   --- DATA EXAMPLE ---
    *   vm.lookupResults = {columns : [], rows: [], keys: [], rowClickHandler : yourScopeControllerFunction};
    *   vm.lookupResults.rows = data.DATA.ROWS;
    *   vm.lookupResults.columns = _.map(_.sortBy(data.DATA.COLUMNS, function(item) {
    *       if(item.LABEL !== undefined) {
    *           vm.lookupResults.keys.push(item.ID);
    *       }
    *       return item.ORDER;
    *   }), "LABEL");
    *
    * */
}());
