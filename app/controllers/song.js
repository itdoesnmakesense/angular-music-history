app.controller("SongCtrl", 
  ["$scope", 
   "song_storage",
   "album_storage",
  function($scope, song_storage, album_storage) {


  $scope.songs = song_storage;


  $scope.albums = song_storage;
  $scope.newSong = {name: "", artists: "", album: ""};

 $scope.theArtist = "";
 $scope.theAlbum = "";
 $scope.leftContainer = false;

 // sort table //
 $scope.sortType     = 'artist'; // set the default sort type
 $scope.sortReverse  = false;  // set the default sort order
 $scope.searchSongs   = '';     // set the default search/filter term



  $scope.showLeft = function(){
    console.log("click");
    $scope.leftContainer = !$scope.leftContainer;
    
  };

 $scope.resetBtn = function(){
    $scope.theArtist = "";
    $scope.theAlbum = "";
 };

 

   $scope.killSong = function(song){
    var songIndex = $scope.songs.$remove(song);
  if (songIndex >= 0) {
    $scope.songs.splice(songIndex, 1);
  }
  };

  $scope.addSong = function(){
    $scope.songs.$add({
      name: $scope.newSong.name,
      artists: $scope.newSong.artist,
      album: {
          name: $scope.newSong.album
             }
        });
    $scope.newSong = "";  
  };


  // song_storage.then(
  //   function(promiseResolutionData) {
  //     console.log("promiseResolutionData", promiseResolutionData);
  //     $scope.songs = promiseResolutionData;
  //     console.log($scope.songs);
  //   },
  //   function(promiseRejectionError) {
  //     console.log("error", promiseRejectionError);
  //   });

  

 // album_storage.then(
 //    function(promiseResolutionData) {
 //      console.log("promiseResolutionData2", promiseResolutionData);
 //      $scope.albums = promiseResolutionData;

 //    },
 //    function(promiseRejectionError) {
 //      console.log("error", promiseRejectionError);
 //    });

  }
]);

 







