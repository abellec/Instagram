angular.module('someklone.services').factory('User', function($q, $http, appConfig) {

  var user = null;

  return {
    login: function(username, password) {
      return $q(function(resolve, reject){
        console.log(appConfig.url);
        $http.post(appConfig.url + "login", { username: username, password: password}).then(function(result){
          if(result.status == 200)
          {
            user = { id: result.data.id, username: result.data.username };
            resolve();
          }
          else
          {
            reject();
          }
        }).catch(function(){
          reject();
        });
      });
    },
    isLogged: function()
    {
      return $q(function(resolve, reject){
        if(user != null)
        {
          resolve();
        }
        else
        {
          reject();
        }
      });
    },
    signup: function(username, password) {
      return $q(function(resolve, reject){
        console.log(appConfig.url);
        $http.post(appConfig.url + "signup", { username: username, password: password}).then(function(result){
          if(result.status == 200)
          {
            resolve();
          }
          else
          {
            reject();
          }
      });
    });
  }
 };
});;
