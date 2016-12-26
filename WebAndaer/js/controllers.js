'use strict'

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('BlogCtrl', ['$scope', function BlogCtrl($scope) {
    $scope.blogList = [
        {
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is a blog post about AngularJS.",
            "blogText":"This is a blog post about AngularJS.\
            We will cover how to  build a blog and how to add comments to the blog post"
        },
        {
            "_id": 2,
            "date": 1400267723107,
            "introText": "This is a blog post about AngularJS.",
            "blogText": "This is a blog post about AngularJS.\
            We will cover how to  build a blog and how to add comments to the blog post"
        }
    ];
}]);