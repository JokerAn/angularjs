

app.controller("indexControl",function($scope,$rootScope){
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


});
