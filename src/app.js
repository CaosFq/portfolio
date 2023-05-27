//Modules
const express = require('express');
const app = express();
const router = require('../routes/index');
const path = require('path');

//Settings
app.set('port', '3004');
app.set('view engie', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

//Middlewares
app.use(router);

//Server Listening
app.listen(app.get('port'), () => {
  console.log(`Server Runnig on port ${app.get('port')}`);
});
