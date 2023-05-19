module.exports.home = function (req, res) {
    return res.end(
        "<h1>Server is up and running (For checking API Endpoints use Postman)</h1>"
    );
};
