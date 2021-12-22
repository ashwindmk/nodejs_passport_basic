const express = require('express');
const passport = require('passport');
const dashboardRouter = require('./router/dashboard-router');

const app = express();

app.use(passport.initialize());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

app.use('/dashboard', dashboardRouter);

app.use((err, req, res, next) => {
    console.error('Some unknown error occurred', err);
    res.status(err.status || 500);
    res.json({ error: err });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
