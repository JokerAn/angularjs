
var app=angular.module("app",['ngRoute']);
app.config(function($httpProvider,$routeProvider) {
    $httpProvider.defaults.headers.common["Authorization"] ="Basic " + btoa("cloudAdmin:123123:z@z.com");//beforeSend 验证头部

    $routeProvider
        .when("/index", {
            templateUrl: "index2/index-2.html",
            controller: "indexControl"
        })

        .when("/test1", {
            templateUrl: "test1/test1.html",
            controller: "test1Control"
        })
        .when("/test2", {
            templateUrl: "test2/test2.html",
            controller: "test2Control"
        })
        .otherwise({redirectTo: '/index'});
});


app.controller("allControl",function($rootScope,$scope,$http,$location){
    $rootScope.gotoPage = function (url) {

        $location.path(url);
        $('body').scrollTop(0);
    };
    $rootScope.gongDaNum=5;//工单数



    $scope.$on("get-ajax",function (e,data) {
        $http.get(data.url).then(
            function (data) {
                // console.log(data);
                $scope.data=data;
                $scope.$broadcast("getInfoOk",$scope.data)
            },
            function (e) {
                console.log("ajax请求失败")
            }
        )
    });
    $scope.$on("post-ajax",function (e,data) {
        $http({
            method:'POST',
            url:data.url,
            data:data.data
        }).then(
            function (data) {
                console.log(data);
            },
            function (e) {
                console.log("ajax请求失败")
            }
        )
    });

    $scope.popHide=function (hide) {
        $rootScope[hide]=false;
    };
    $scope.popShow=function (show,title) {
        $rootScope[show]=true;
        $scope.poptitle=title;
    }
    $(" body .b1").jeDate({
        skinCell:"jedateblue",                      //日期风格样式，默认蓝色
        format:"YYYY-MM-DD hh:mm:ss",               //日期格式
        minDate:"1900-01-01 00:00:00",              //最小日期
        maxDate:"2099-12-31 23:59:59",              //最大日期
//            language:{                                  //多语言设置
//                name  : "cn",
//                month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
//                weeks : [ "日1", "一1", "二1", "三1", "四1", "五1", "六1" ],
//                times : ["小时111","分钟111","秒数111"],
//                clear : "清空1",
//                today : "今天1",
//                yes   : "确定1",
//                close : "关闭1"
//            },
        fixedCell:"",                               //日历固定在页面中的ID(ID是唯一性的)，字符中不能包含 # 与 . 这样的，默认值为空
        trigger:"click",                            //是否为内部触发事件，默认为内部触发事件
        position:[],                                //自定义日期弹层的偏移位置，长度为0，弹层自动查找位置
        hmsSetVal:{},                               //设置默认时分秒 {hh:00,mm:00,ss:00}
        startMin:"",                                //清除日期后返回到预设的最小日期
        startMax:"",                                //清除日期后返回到预设的最大日期
        isvalid:[],                                 //有效日期与非有效日期 ["3,4,8,10",true]
        isinitVal:false,                            //是否初始化时间，默认不初始化时间
        initAddVal:{},                              //初始化时间，加减 天 时 分
        isTime:true,                                //是否开启时间选择
        hmsLimit:true,                              //时分秒限制
        ishmsVal:true,                              //是否限制时分秒输入框输入，默认可以直接输入时间
        isClear:true,                               //是否显示清空
        isToday:true,                               //是否显示今天或本月
        isok:true,                                  //是否显示确定按钮
        clearRestore:true,                          //清空输入框，返回预设日期，输入框非空的情况下有效
        festival:false,                             //是否显示农历节日
        fixed:true,                                 //是否静止定位，为true时定位在输入框，为false时居中定位
        zIndex:2099,                                //弹出层的层级高度
        marks:null,                                 //给日期做标注
        choosefun:function(elem, val, date) { //选中日期后的回调, elem当前输入框ID, val当前选择的值, date当前完整的日期值
            console.log(1);
            console.log(elem);
            console.log(val);
            console.log(date);
        },
        clearfun:function(elem, val) {//清除日期后的回调, elem当前输入框ID, val当前选择的值
            console.log(2);
            console.log(elem);
            console.log(val);
        },
        okfun:function(elem, val, date) {//点击确定后的回调, elem当前输入框ID, val当前选择的值, date当前完整的日期值
            console.log(3);
            console.log(elem);
            console.log(val);
            console.log(date);
        },
        success:function(elem) {//层弹出后的成功回调方法, elem当前输入框ID
            console.log(4);
            console.log(elem);
        }
    });
});


app.directive("myPop",function () {
    return{
        restrict: 'ECA',
        templateUrl:function(scope,attrs){
            // console.log(attrs.templateurl);
            return attrs.templateurl
        },
        replace: true,
        controller:function(){//控制弹出框的日期
            $(" body .andate").jeDate({
                skinCell:"jedateblue",                      //日期风格样式，默认蓝色
                format:"YYYY-MM-DD hh:mm:ss",               //日期格式
                minDate:"1900-01-01 00:00:00",              //最小日期
                maxDate:"2099-12-31 23:59:59",              //最大日期
//            language:{                                  //多语言设置
//                name  : "cn",
//                month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
//                weeks : [ "日1", "一1", "二1", "三1", "四1", "五1", "六1" ],
//                times : ["小时111","分钟111","秒数111"],
//                clear : "清空1",
//                today : "今天1",
//                yes   : "确定1",
//                close : "关闭1"
//            },
                fixedCell:"",                               //日历固定在页面中的ID(ID是唯一性的)，字符中不能包含 # 与 . 这样的，默认值为空
                trigger:"click",                            //是否为内部触发事件，默认为内部触发事件
                position:[],                                //自定义日期弹层的偏移位置，长度为0，弹层自动查找位置
                hmsSetVal:{},                               //设置默认时分秒 {hh:00,mm:00,ss:00}
                startMin:"",                                //清除日期后返回到预设的最小日期
                startMax:"",                                //清除日期后返回到预设的最大日期
                isvalid:[],                                 //有效日期与非有效日期 ["3,4,8,10",true]
                isinitVal:false,                            //是否初始化时间，默认不初始化时间
                initAddVal:{},                              //初始化时间，加减 天 时 分
                isTime:true,                                //是否开启时间选择
                hmsLimit:true,                              //时分秒限制
                ishmsVal:true,                              //是否限制时分秒输入框输入，默认可以直接输入时间
                isClear:true,                               //是否显示清空
                isToday:true,                               //是否显示今天或本月
                isok:true,                                  //是否显示确定按钮
                clearRestore:true,                          //清空输入框，返回预设日期，输入框非空的情况下有效
                festival:false,                             //是否显示农历节日
                fixed:true,                                 //是否静止定位，为true时定位在输入框，为false时居中定位
                zIndex:2099,                                //弹出层的层级高度
                marks:null,                                 //给日期做标注
                choosefun:function(elem, val, date) { //选中日期后的回调, elem当前输入框ID, val当前选择的值, date当前完整的日期值
                    console.log(1);
                    console.log(elem);
                    console.log(val);
                    console.log(date);
                },
                clearfun:function(elem, val) {//清除日期后的回调, elem当前输入框ID, val当前选择的值
                    console.log(2);
                    console.log(elem);
                    console.log(val);
                },
                okfun:function(elem, val, date) {//点击确定后的回调, elem当前输入框ID, val当前选择的值, date当前完整的日期值
                    console.log(3);
                    console.log(elem);
                    console.log(val);
                    console.log(date);
                },
                success:function(elem) {//层弹出后的成功回调方法, elem当前输入框ID
                    console.log(4);
                    console.log(elem);
                }
            });
        }
    }
});

