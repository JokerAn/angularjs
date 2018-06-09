
var app=angular.module("app",['ngRoute']);
app.config(function($httpProvider,$routeProvider,$locationProvider) {
    $httpProvider.defaults.headers.common["Authorization"] ="Basic " + btoa("cloudAdmin:123123:z@z.com");//beforeSend 验证头部

    $routeProvider
        .when("/index", {
            templateUrl: "page/index-2.html",
            controller: "indexControl"
        })

        .otherwise({redirectTo: '/index'});
});
app.service('myData',function(){
    return {    };
});
app.controller("allControl",function($rootScope,$scope,$http,$location){
    $rootScope.gotoPage = function (url) {
        $location.path(url);
        $('body').scrollTop(0);
    };

});
app.controller("indexControl",function($rootScope,$scope,$http,$location){
    $scope.pop1Show=false;
    $scope.pop2Show=false;
    $scope.letPop1Show=function(){
        $scope.pop1Show=true;
    };
    $scope.letPop2Show=function(){
        $scope.pop2Show=true;
    };
    $scope.aaa='阿斯顿发';
    $scope.bbb='对对对';
    $scope.ccc='算得上是';

});
app.component('popOne',{
    templateUrl:'page/pop1.html',
    bindings:{
        alertShow:'=',
        alertShow2:'=',
        pathData:'=',
        someData:'=',
    },
    controller:function($rootScope,$scope,$timeout,myData){
        var self=this;
        self.pop1data=[];
        self.getPop1SelfDate=function(){
            var ele=$('.pop1 ul li input');
            for(var i=0;i<ele.length;i++){
                if(ele.eq(i).val()!==''){
                    self.pop1data.push(ele.eq(i).val());
                }
            }
            $rootScope.$emit('pop1data',self.pop1data);
            console.log(self.pop1data);
        }
        myData.factoryPathData_pop1=[];
        self.pop1PathDataToPop2=myData.factoryPathData_pop1;
        // 之所以定义self.pop1PathDataToPop2 是想在pop1中展示数据
        // 因为myData.factoryPathData_pop1无法直接展示 需要 $ctrl.xxx来进行展示
        //操作的时候还是要用myData.factoryPathData_pop1，
        // 如果self.pop1PathDataToPop2.push(xxxx)还好，
        // 一旦self.pop1PathDataToPop2=【】就相当于重新给了他一个指针
        // 没用myData.factoryPathData_pop1;什么事了

        self.selected=function(res){
            myData.factoryPathData_pop1.push($(res.target).val());
            console.log(myData);
        }
    }

});
app.component('popTwo',{
    templateUrl:'page/pop2.html',
    bindings:{
        alertShow:'=',
        alertShow2:'=',
        pathData:'=',
        needData:'=',
    },
    controller:function($rootScope,$scope,$timeout,myData){
        var self=this;
        self.pop1GetDate=[];
        $rootScope.$on('pop1data',function (e,data) {
            console.log(data);
            self.pop1GetDate=data;
        });

        self.pop1GetDate2=myData.factoryPathData_pop1;
        self.removeOneData=function () {
            myData.factoryPathData_pop1.pop()
        }
    }
});

// app.component('myPane', {
//         require: {tabsCtrl: '^myTabs'},
//         transclude: true,
//         bindings: {
//             title: '@'
//         },
//         controller: function () {
//             this.$onInit = function () {
//                 this.tabsCtrl.addPane(this);
//                 console.log(this.tabsCtrl);
//             };
//         },
//         templateUrl: 'page/my-pane.html'
//     });
//






























