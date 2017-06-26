

app.controller("indexControl",function($scope,$rootScope,$location){
    leftBlue('/index');






    $scope.cdata={
        url:'http://www.longtel.com/console/api/iaas/position'//选区
    };
    $scope.$emit("get-ajax",$scope.cdata);
    $scope.$on("getInfoOk",function(e,data){
        $scope.options=data.data[0].kind;
        // console.log($scope.options);
        // $rootScope.index2Popcj=true;
        // $scope.poptitle='asdfa';

    });
    $scope.companys=['龙腾佳讯','脉展','佳美','百度'];
    $scope.company='龙腾佳讯';
    $scope.userName="请登录";
    $scope.setUserName=function(name){
        $scope.localStorageLength=localStorage.length+1;
        localStorage.setItem("jokeran"+$scope.localStorageLength,name);
        $scope.newUserName=localStorage.getItem("jokeran"+$scope.localStorageLength);

    };
    $scope.clearUserName=function(){
        console.log("jokeran"+localStorage.length);
        localStorage.removeItem("jokeran"+localStorage.length);

    };


});
