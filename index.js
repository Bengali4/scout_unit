//Import express
let express = require('express');
//Initialize express
let app = express();

//Send message for default route
app.get('/', (req, res) => { res.send('Hello World!');});

//Setup server port
let port = 3000;
//Launch app to listen on port
app.listen(port, function () {
    console.log('Server running on port ' + port);
});