angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home.misCitas', {
    url: '/miscitas',
    views: {
      'tab1': {
        templateUrl: 'templates/misCitas.html',
        controller: 'misCitasCtrl'
      }
    }
  })

  .state('home.reservar', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/reservar.html',
        controller: 'reservarCtrl'
      }
    }
  })

  .state('home.misDatos', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/misDatos.html',
        controller: 'misDatosCtrl'
      }
    }
  })

  .state('home.examenes', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/examenes.html',
        controller: 'examenesCtrl'
      }
    }
  })

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('home.detalle', {
    url: '/page7',
	params: {
		cita: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/detalle.html',
        controller: 'detalleCtrl'
      }
    }
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page8')

  

});