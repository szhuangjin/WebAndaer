'use strict'

var andaerServices = angular.module('andaerServices', []);

andaerServices.factory('testService', [function () {
    return {
        msg: function (msg) {
            alert(msg);
        }
    }
    
}]);