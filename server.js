const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 40;

// Folder to retrieve CSS and JS Files
app.use(express.static("public"));

// Middleware to parse the JSON data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// PORT
app.listen(PORT, () => {
    console.log(`Server running on http://loacalhost:${PORT}`);
});

module.exports = app;