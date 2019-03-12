// 创建依赖ui.router模块的模块myApp
var myApp = angular.module('helloworld', ['ui.router']);
// 通过AngularJS 模块的 config 函数配置路由规则,再通过依赖注入将$stateProvider注入到配置函数，调用state函数定义路由规则
myApp.config(function($stateProvider) {
    $stateProvider
        .state({
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        })
        .state({
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        });
});