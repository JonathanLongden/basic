angular.module("basic")
.service("mainServ", function($http){

this.qcCardPost = function(qaCardData){
    return $http({
        method:"POST",
        url:"/#/screentwo",
        data: qaCardData
    })
    .then(function(res){
      return res.data;
    });
  };
  





});