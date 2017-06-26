


app.controller("test2Control",function($scope,$rootScope){
    $scope.cdata={
        url:'http://www.longtel.com/console/api/iaas/position'//选区
    };
    $scope.$emit("get-ajax",$scope.cdata);
    $scope.$on("getInfoOk",function(e,data){
        $scope.options=data.data[0].kind;
        // console.log($scope.options);
    });
    $scope.myPop=true;
});

