module.exports.handleError = function (err, req, res, next) {
    if (err) {
        req.code = 401;
        req.info =
            "Authorization failed! Invalid Authorization Username/Password/Key!";
        return res.status(req.code).json({
            message: req.info,
        });
    } else {
        next();
    }
};
