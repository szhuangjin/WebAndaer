'use strict'

var andaerControllers = angular.module('andaerControllers', []);

andaerControllers.controller('mainCtrl', ['$scope',
    function mainCtrl($scope) {
        $('#slideshow').carousel({});
        $scope.funprev = function () {
            $('#slideshow').carousel('prev');
        };
        $scope.funnext = function () {
            $('#slideshow').carousel('next');
        };
        $(document).on('keydown', function (e) {
            switch (e.which) {
                case 37:
                    $scope.funprev();
                    break;
                case 39:
                    $scope.funnext();
                    break;
                default:
                    break;
            }
        })
        $('#slideshow').on('slide.bs.carousel', function () {
            console.log('play');
        }).on('slid.bs.carousel', function () {
            console.log('end');
        });
        var play = false;
        $scope.funplay = function (o) {
            //console.log($(o))
            if (!play) {
                
                $('#slideshow').carousel('cycle');
                $(o).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
            } else {
                $('#slideshow').carousel('pause');
                $(o).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
            }
            play = !play;
        }
    }]);