const express = require('express');
require('../middleware/auth-middleware');
const passport = require('passport');
const dashboardController = require('../controller/dashboard-controller');

const router = express.Router();

/* // Return custom json response
router.route('/home').get((req, res, next) => {
    passport.authenticate('basic', {session: false}, (err, user, info) => {
        if (err) {
            return next(err);
        }
        
        if (!user) {
            return res.status(401).json({message: 'Invalid username or password'});
        }

        return dashboardController.getHome(req, res, next);
    })(req, res, next);
});
*/

// Return default 401 text response
router.get('/home', passport.authenticate('basic', {session: false}), dashboardController.getHome);

module.exports = router;
