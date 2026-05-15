import express from 'express';
import path from 'path';

const app = express();
const puerto = 3000;

app.use(express.static('Servidor_K')); //Permite que se lea cualquier archivo en esta carpeta
app.use(express.json()); //Express para leer json

//HTML

app.get('/', (req, res) => {
  res.sendFile(path.resolve('bienvenida.html'));
});

app.get('/perfil', (req, res) => {
  res.sendFile(path.resolve('perfil.html'));
});

app.get('/movimientos', (req, res) => {
  res.sendFile(path.resolve('movimientos.html'));
});

app.get('/equipoHTML', (req, res) => {
  res.sendFile(path.resolve('equipo.html'));
});

app.get('/opinion', (req, res) => {
  //AQUI PUSE LO DEL ARBOL
  res.sendFile(path.resolve('opinion.html'));
});

//APIS (para este ejemplo siguen siendo json)

app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    {
      nombre: 'Punk',
      saldo: '0',
    },
    {
      nombre: 'Pedro',
      saldo: '1',
    },
    {
      nombre: 'Ana',
      saldo: '500',
    }
  ];

  //simplifica mucho mandar jsons
  res.json(usuarios);
});

app.get('/api/movimientos', (req, res) => {
  const movimientos = [
    { id: 1, tipo: 'ingreso', monto: 1000, fecha: '2026-04-20' },
    { id: 2, tipo: 'egreso', monto: 500, fecha: '2026-04-21' },
    { id: 3, tipo: 'ingreso', monto: 2000, fecha: '2026-04-22' }
  ];

  res.json(movimientos);
});

app.get('/equipo', (req, res) => {
  const equipo = [
    {
      nombre: 'Jesús Andrés Márquez Martínez',
      cualidad: 'Comunicativo',
    },
    {
      nombre: 'Gael Adrián Cervantes López',
      cualidad: 'Creativo',
    }
  ];

  res.json(equipo);
});

app.get('/checkout', (req, res) => {
  res.send('Checkout funcionando');
});

app.get('/auth', (req, res) => {
  res.send('Usuario autentificado');
});

app.get('/user', (req, res) => {
  const user = {
    nombre: 'Usuario1',
    edad: 20
  };

  res.json(user);
});

app.get('/saldo', (req, res) => {
  res.json({ saldo: 1000 });
});

app.get('/cashback', (req, res) => {
  res.json({ cashback: 50 });
});

app.get('/prestamos', (req, res) => {
  const prestamos = [
    { id: 1, monto: 5000 },
    { id: 2, monto: 10000 }
  ];

  res.json(prestamos);
});

//Ejercicio inventado 
app.get('/getPartners/:id', (req, res) => {

  const bancos = [
    { id: 1, nombre: 'ADIDAS' },
    { id: 2, nombre: 'MAC' },
    { id: 3, nombre: 'PUMA' }
  ];

  const tiendaPartner = tiendaPartner.find(b => b.id == req.params.id);

  if (!tiendaPartner) {
    return res.status(404).send('No es tienda Partner de Kueski');
  }

  res.json(tiendaPartner);
});

//Errores

// Esto se ejecuta si ninguna ruta existe. Express lo facilita mucho
app.use((req, res) => {
  res.status(404).send('BUUUUU no encontré esa página');
});

//Servidor

app.listen(puerto, () => {
  console.log(`Servidor Express funcionando en http://localhost:${puerto}`);
});
