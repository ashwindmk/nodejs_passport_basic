exports.getHome = (req, res, next) => {
    console.log('dashboard-controller: getHome');
    res.json({
        message: 'You made it to the secure route'
    });
};
