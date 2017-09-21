var GHMApp = angular.module('GHMApp.controllers',[]);
////controller time

GHMApp.controller('MainController', function($rootScope, $scope, $http){
 

}); 



GHMApp.controller('LoginController', function($scope, $http, $state){
  
  //this is a config for posting.... it makes it work , lol it changes the posting type sha...u'd get to under
  //stand later but for now, just know u have to paste it on top every $http.post
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
 ///so over here, u do
 $scope.doLoginSubmit = function(user){
 	//accept user from the html
 	$http.post("http://localhost/channel-server/v1/login", user) //cuz we dey post to login
 	.then(function(response){		//check if login is successful
 		if(response.data.status === "success"){
 			$state.go("/dashboard");
 		}else{
 			alert(response.data.message);
 		}
 	})
 }

});

GHMApp.controller('RegController', function($scope,$http,$state){
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	//
	$scope.doRegSubmit = function(regUser){
   ///accept shii from the resgisteration
    $http.post("http://localhost/channel-server/v1/addUser", {"surname":regUser.username,"othername":regUser.othername, "gender":regUser.gender, "stateOrigin":regUser.state ,"stateResidence":regUser.stateRes,"homeAddress":regUser.homeAdd,"email":regUser.email,"dob":regUser.birth,"fbid":regUser.fbId,"phone":regUser.phoneNum, "colleger":regUser.college ,"programme":regUser.programme,"matric":regUser.matricNo,"reg":regUser.regNo,"extras":regUser.ExCurri,"osa":regUser.schoolAct,"pow":regUser.placeWorship,"denom":regUser.denomination,"yearJoined":regUser.yearJoin,"post":regUser.postHeld,"dateNew":regUser.newBirth,"baptize":regUser.baptized,"serveTech":regUser.served,"whyTech":regUser.joinTech,"choiceSub":regUser.subUnit,"ready":regUser.readyServe,"terms":regUser.agree,"code": regUser.code })
    .then(function(response){
     	if(response.data.status === "success"){
     		alert(response.data.message);
     		//$state.go("/login");
     	}else if (response.data.status === "error") {
     		alert(response.data.message);
    
    }
     		
     	  
	})
}

});

/*GHMApp.controller('alarmControler', function($scope,$state,$localStorage){
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  //
 $scope.saveData = function(){
  var Obj = {}
  $localStorage.message
  $window.localStorage.set
 }

 $scope.loadData = function(){}

 $scope.deleteData =  function(){}
}

});
*/