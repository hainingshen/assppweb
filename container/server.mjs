import http from 'node:http';

const port = Number(process.env.PORT || 8080);

const server = http.createServer((req, res) => {
  if (!req.url) {
    res.writeHead(400, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ error: 'bad request' }));
    return;
  }

  if (req.url === '/api/settings') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  res.end('Asspp container image placeholder is running.');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`container server listening on ${port}`);
});
