app.factory("album_storage", function($firebaseArray){

var ref = new Firebase("https://scorching-inferno-1464.firebaseio.com/songs");

  return $firebaseArray(ref);

});
