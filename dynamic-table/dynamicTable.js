(function () {
    'use strict';
    angular.module('portlet.io.dynamictable', []).directive('dynamicTable', function ($log) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                scrollBody : '=',
                data : '=tableData',
                sortBy : '='
            },
            template: '<table class="dynamic-table table table-condensed flip-content" ng-class="{\'no-bot-margin\' : scrollBody, \'table-striped\' : !scrollBody, \'table-hover\' : data.rowClickHandler}">' +
    '<thead class="flip-content">' +
        '<tr>' +
            '<th ng-if="!data.columnWidths" style="width: {{100 / data.columns.length}}%;" ng-repeat="column in data.columns">{{ column }}</th>' +
            '<th ng-if="data.columnWidths" ng-repeat="column in data.columns" style="width: {{ data.columnWidths[$index] }}%;" >{{ column }}</th>' +
        '</tr>' +
    '</thead>' +
    '<tbody>' +
        '<tr ng-if="scrollBody" class="scroll-body-cell-container">' +
            '<td colspan="{{ data.columns.length }}">' +
                '<div ng-class="{\'table-scroll-body\' : scrollBody}">' +
                    '<table class="table table-striped table-condensed no-top-border" ng-class="{\'table-hover\' : data.rowClickHandler}">' +
                        '<tbody>' +
                            '<tr ng-class="data.rowClickHandler ? \'row-pointer\' : \'\'" ng-repeat="row in data.rows" ng-click="data.rowClickHandler ? onRowClicked(data.rowClickHandler) : null">' +
                                '<td ng-if="!data.columnWidths" style="width: {{ 100 / data.columns.length }}%;" ng-repeat="key in data.keys">{{ row[key] }}</td>' +
                                '<td ng-if="data.columnWidths" ng-repeat="key in data.keys" style="width: {{ data.columnWidths[$index] }}%;" >{{ row[key] }}</td>' +
                            '</tr>' +
                        '</tbody>' +
                    '</table>' +
                '</div>' +
            '</td>' +
        '</tr>' +
        '<tr ng-if="!scrollBody" ng-class="{\'row-pointer\' : data.rowClickHandler}" ng-repeat="row in data.rows" ng-click="data.rowClickHandler ? onRowClicked(data.rowClickHandler) : null">' +
            '<td ng-repeat="key in data.keys">{{ row[key] }}</td>' +
        '</tr>' +
    '</tbody>' +
'</table>',
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