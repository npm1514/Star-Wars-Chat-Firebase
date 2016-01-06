var app = angular.module("StarWarsChatApp",['firebase']);

app.constant('firebaseRoot','https://star-wars-chat.firebaseio.com/apps/starWarsApp');

app.controller("MasterCtrl",function(){

});

app.controller("MessagesCtrl",function($scope,$firebaseObject,$firebaseArray,$firebaseAuth,firebaseRoot){
  var messagesRef = new Firebase(firebaseRoot + '/messages');
  var messages = $firebaseArray(messagesRef);

  $scope.messages = messages;
  $scope.addMessage = function(message) {
    $scope.messages.$add(message);
  };
});
