// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('soundboard', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('SoundboardCtrl', function($scope) {

  $scope.media = null;

  $scope.model = {
    showDelete: false,
    showMove: false,
    sounds: [
      {
        'title': 'Cow',
        'image': 'img/animals/cow-icon.png',
        'desc': 'Mooo',
        'file': '/sounds/cow.mp3',
      },
      {
        'title': 'Dolphin',
        'image': 'img/animals/dolphin-icon.png',
        'desc': 'Whistle',
        'file': '/sounds/dolphin.mp3',
      },
      {
        'title': 'Frog',
        'image': '/img/animals/frog-icon.png',
        'desc': 'Croak',
        'file': '/sounds/frog.mp3',
      },
      {
        'title': 'Bird',
        'image': 'img/animals/bird-icon.png',
        'desc': 'Chirp',
        'file': '/sounds/bird.mp3',
      },
      {
        'title': 'Pig',
        'image': 'img/animals/pig-icon.png',
        'desc': 'Oink',
        'file': '/sounds/pig.mp3',
      },
      {
        'title': 'Dog',
        'image': 'img/animals/dog-icon.png',
        'desc': 'Bark',
        'file': '/sounds/dog.mp3',
      },
      {
        'title': 'Cat',
        'image': 'img/animals/black-cat-icon.png',
        'desc': 'Meow',
        'file': '/sounds/cat.mp3',
      },
    ]
  };

  $scope.play = function(sound) {
    //  
  };

});
