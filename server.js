const express = require('express');
const app = express();
const enforce = require('express-sslify');
const compression = require('compression');


const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server running on port : ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(compression());

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
  });
}
