const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    function(username, password, done) {
        console.log(`Authentication using basic strategy for username: ${username}, password: ${password}`);
        if (username === 'admin' && password === 'pass123') {
            return done(null, true);
        } else {
            // 401: Unauthorized
            return done(null, false, {message: 'Incorrect basic username or password'});
        }
    }
));
