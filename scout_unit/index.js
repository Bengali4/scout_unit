//Import express
const express = require('express');
//Initialize express
const app = express();

//Import db
const db = require('./db');
//Use json
app.use(express.json());
//sync db
db.sync();
//db.sync({force:true});

//Send message for default route
app.get('/', (req, res) => { res.send('Hello World!');});

//Import routes
app.use('/section', require('./routes/section_rt'));
app.use('/scout', require('./routes/scout_rt'));
app.use('/scout_section', require('./routes/scout_section_rt'));

//Setup server port
const port = 3000;
//Launch app to listen on port
app.listen(port, function () {
    console.log('Server running on port ' + port);
});