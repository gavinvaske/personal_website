const express = require('express');

const app = express();
PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})