 var GHMApp = angular.module('GHMApp', ['GHMApp.controllers', 'ui.router' ]);

 GHMApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/login")
     
    $stateProvider
        //Dashboard
        .state('/dashboard', {
            url: "/dashboard",
            templateUrl: "/pages/dashboard.html",
            controller: "mainController"
        })
        //sidebar
        .state('/sidebar', {
            url: "/sidebar",
            templateUrl: "/pages/sidebar.html",
            controller: "mainController"
        })
        // registration
        .state('register', {
            url: "/register",
            templateUrl: "pages/register.html",
            controller: "RegController"
        })
        // login
        .state('login', {
            url: "/login",
            templateUrl: "pages/login.html",
            controller: "LoginController"
        })
         // update
        .state('update', {
            url: "/update",
            templateUrl: "pages/update.html",
            controller: "RegController"
        })
        // prospectives
        .state('prospectives', {
            url: "/prospectives",
            templateUrl: "pages/prospectives.html",
            controller: "RegController" 
        
        })
        //settings
        .state('settings', {
            url: "/settings",
            templateUrl: "pages/settings.html",
            controller: "RegController"
        })
         
          // user
        .state('user', {
            url: "/user",
            templateUrl: "pages/user.html",
            controller: "RegController" 
        })
       
         // attendance
        .state('attendance', {
            url: "/attendance",
            templateUrl: "pages/attendance.html",
            controller: "attendController"
        })
         // reminder
        .state('reminder', {
            url: "/reminder",
            templateUrl: "pages/reminder.html",
            controller: "remController"
        })
         // Calendar
        .state('calendar', {
            url: "/calendar",
            templateUrl: "pages/calendar.html",
            controller: "mainController"
        })

    }]);