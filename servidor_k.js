//http sirve para crear servidores, tambien da funciones como GET, POST, etc, comunicarse con APIs
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
//fs (sile system) sirve para interactuar (leer, escribir, modificar) con los archivos usando JS
import fs from 'fs';

//Esta función deberá mostrar deberá mostrar una página HTML 
//con la bienvenida a tu proyecto
function darBienvenida(req, res) {
  //Agrega lo mínimo necesario en bienvenida.html

  //Leer/abrir el documento 'bienvenida.html'
  fs.readFile('bienvenida.html', 'utf8', (error, data) => {
    if (error) {
      //Escribe qué significa el 500 
      //El error 500: Internal Server Error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Oh no!!!!');
      return;
    }
    //Escribe qué significa el 200
    //El código 200 OK: significa que una solicitud HTTP ha tenido éxito y se ha procesado correctamente
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

//Esta función deberá enviar un json con los datos de los usuarios
function getUsuarios(req, res) {
  const usuarios = [ //Esto representa un array de usuarios
  { //Esto representa un objeto JSON de un solo usuario
  //Agrega otro usuario
    "nombre": "Punk",
    "saldo": "0",
  },
  {
    "nombre": "Pedro",
    "saldo": "1",
  }];
  res.writeHead(200, { 'Content-Type': 'application/json' });
      
  //Escribe qué hace la función stringify y por qué la tenemos que usar
  //JSON.stringify() es un método que convierte un objeto/valor de JS en una cadena de texto JSON (serialización)
  //Lo usamos para poder mostrar los datos del usuario
  res.end(JSON.stringify(usuarios));
}

function mostrarPerfil(req, res) {
  fs.readFile('perfil.html', 'utf8', (error, data) => {
  if (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Oh no!!!!');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
  });
}

function mostrarMovimientos(req, res) {
  //Construye una página básica movimientos.html
  fs.readFile('movimientos.html', 'utf8', (error, data) => {
  if (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Oh no!!!!');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
  });
}

//Esta función deberá enviar un json con los datos de las movimientos
function getMovimientos(req, res) {
  const movimientos = [
    { id: 1, tipo: 'ingreso', monto: 1000, fecha: '2026-04-20' },
    { id: 2, tipo: 'egreso', monto: 500, fecha: '2026-04-21' },
    { id: 3, tipo: 'ingreso', monto: 2000, fecha: '2026-04-22' }
  ];

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(movimientos));
}

function manejarRuta404(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  //Cambia el mensaje por algo más divertido
  res.end('BUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU no hay página.');
}

function mostrarEquipo(req, res){
  const equipo = [
  {
    "nombre": "Jesús Andrés Márquez Martínez",
    "cualidad": "Comunicativo",
  },
  {
    "nombre": "Gael Adrián Cervantes López",
    "cualidad": "Creativo"
  }];

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(equipo));
}

function equipoHTML(req, res) {
  fs.readFile('equipo.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Oh no!!!!');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function checkout(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Checkout funcionando');
}

function auth(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Usuario autentificado');
}

function mostrarUser(req, res){
  const user = {
    nombre: "Usuario1",
    edad: 20
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(user));
}

function mostrarSaldo(req, res){
  const saldo = { saldo: 1000 };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(saldo));
}

function mostrarCashback(req, res){
  const cashback = { cashback: 50 };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(cashback));
}

function mostrarPrestamos(req, res){
  const prestamos = [
    { id: 1, monto: 5000 },
    { id: 2, monto: 10000 }
  ];
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(prestamos));
}

function opinionHTML(req, res){
  fs.readFile('opinion.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

//incluye el enlace a la documentación de createServer
//https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const servidor = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    darBienvenida(req, res);
  } else if (url === '/api/usuarios') {
    getUsuarios(req, res);
  } else if (url === '/api/movimientos') {
    getMovimientos(req, res);
  } 
  else if (url === '/usuarios') {
    getUsuarios(req, res);
  } 
  else if (url === '/movimientos') {
    mostrarMovimientos(req, res);
  }
  else if (url === '/equipo') {
    mostrarEquipo(req, res);
  }
  else if (url === '/checkout') { //FALTA
    checkout(req, res);
  }
  else if (url === '/auth') { //FALTA
    auth(req, res);
  }
  else if (url === '/user') { //FALTA
    //MOSTRAR INFO DE USUARIO COMO NOMBRE, EDAD, ETC
    mostrarEquipo(req, res);
  }
  else if (url === '/saldo') { //FALTA
    mostrarSaldo(req, res);
  }
  else if (url === '/cashback') { //FALTA
    mostrarCashback(req, res);
  }
  else if (url === '/prestamos') { //FALTA
    mostrarPrestamos(req, res);
  }
  else if (url === '/opinion') { //FALTA
    opinionHTML(req, res);
  }
  
  //Los servidores no contienen archivos estaticos, por lo que puede que no se vea la imagen
  //entonces responde un 404 error not found
  
  else {
    manejarRuta404(req, res);
  }
});

const puerto = 1984;
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

//Importante
//En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html