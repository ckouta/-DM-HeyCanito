
// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/Tortas/',
      url: 'Tortas.html'
    },
    {
      path: '/listaProducto/',
      url: 'listaProducto.html',
    },
    {
      path: '/bolsa/',
      url: 'bolsa.html',
    },
    {
      path: '/login-screen/',
      url: 'sesion.html'
    },
    {
      path: '/index/',
      url: 'index.html'
    }

  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
})
// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

// Instance Events
var panelRight = app.panel.right;
panelRight.on('open', function () {
  console.log('Panel right: open');
});
panelRight.on('opened', function () {
  console.log('Panel right: opened');
});

// App Events
app.on('panelClose', function (panel) {
  console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
  console.log('Panel ' + panel.side + ': closed');
});
app.on('panelResize', function (panel, newPanelWidth) {
  console.log('Panel resized to ' + newPanelWidth + 'px');
});

// Login Screen-Modal DOM events
$$('.login-screen').on('loginscreen:open', function (e, loginScreen) {
  console.log('Login screen open')
});
$$('.login-screen').on('loginscreen:opened', function (e, loginScreen) {
  console.log('Login screen opened')
});
$$('.login-screen').on('loginscreen:close', function (e, loginScreen) {
  console.log('Login screen close')
});
$$('.login-screen').on('loginscreen:closed', function (e, loginScreen) {
  console.log('Login screen closed')
});