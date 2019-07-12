
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
  app.request.get('http://localhost:3005/productos',{}, function (data) {
   // var html='<p>'+data.data.nombre+'</p>';
    var td =[];
    var valores = JSON.parse(data);
    valores.data.forEach(element => {
      td.push('<tr><td>'+element.nombre+'</td><td>'+element.precio+'</td><td>'+element.descripcion+'</td><td>'+element[3]+'</td><td>'+element[4]+'</td><td>'+element[5]+'</td></tr>');
    });
    $$('#articles').html(td);
 
});
  console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page

$$(document).on('page:Tortas', '.page[data-name="Tortas"]', function (e) {
  
  console.log(e);
})
// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

function myFunction(id) {
  var td =[];
  app.request.get('http://localhost:3005/producto/categoria/'+id,{}, function (data) {
    console.log("paso aqui");
    var valores = JSON.parse(data);
    valores.data.forEach(element => {
      td.push('<li >');
      td.push('<a href="/listaProducto/" onclick="detalle('+element.id+')" class="Tortas">');
      td.push('<div class="item-content">');
      td.push('<div class="item-media"><img width="80" src="'+element.imagen+'"/> </div>');
      td.push('<div class="item-inner">');
      td.push('<div class="item-title-row">');
      td.push('<div class="item-title">'+element.nombre+'</div>');
      td.push('<div class="item-after">'+element.precio+'</div>');
      td.push('</div>');
      td.push('<div class="item-subtitle"> cantidad de personas: '+element.cantidad_personas+'</div>');
      td.push('<div class="item-text">'+element.descripcion+'</div>');
      td.push('</div>');
      td.push('</div>');
      td.push('</a>');
      td.push('<div class="sortable-handler"></div>');
      td.push('</li>');
    });
    console.log(td.join(''));
   $$('#list').html(td.join(''));
  });
}
function detalle(id) {
  var td =[];
  app.request.get('http://localhost:3005/producto/'+id,{}, function (data) {
    console.log("paso aqui");
    var valores = JSON.parse(data);
    valores.data.forEach(element => {
      td.push('<h1>'+element.nombre+'</h1>');
      td.push(' <div class="item-media">');
      td.push('      <img src="'+element.imagen+'" width="100%" />');
      td.push(' </div>');
      td.push(' <p>Descripcion: '+element.descripcion+'</p>');
      td.push(' <p>Precio: '+element.precio+'</p>');
      td.push(' <div class="row">');
      td.push('      <div class="col">');
      td.push('         <div class="stepper stepper-fill stepper-round stepper-init">');
      td.push('             <div class="stepper-button-minus"></div>');
      td.push('             <div class="stepper-input-wrap">');
      td.push('                <input type="text" value="0" min="0" max="100" step="1" readonly>');
      td.push('            </div>');
      td.push('             <div class="stepper-button-plus"></div>');
      td.push('          </div>');
      td.push('     </div>');
      td.push('     <div class="col">');
      td.push('         <button class="button col">Carrito</button>');
      td.push('     </div>');
      td.push('  </div>');
    });
    console.log(td.join(''));
   $$('#detalle').html(td.join(''));
  });
}

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