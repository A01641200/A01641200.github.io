import http from 'http';

const servidor = http.createServer(async (req, res) => {

  if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end("Recibí un POST");
  }

  if (req.method === 'GET') {
    try {
      const respuesta = await fetch(
        "https://api.aviationstack.com/v1/flights?access_key=YOUR_API_KEY&limit=1"
      );

      const datos = await respuesta.json();
      const vuelo = datos.data[0];

      const texto = `
Fecha: ${vuelo.flight_date}
Aeropuerto: ${vuelo.departure?.airport}
`;

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(texto);

    } catch (error) {
      res.writeHead(500);
      res.end("Error");
    }
  }
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor en http://localhost:${puerto}`);
});
