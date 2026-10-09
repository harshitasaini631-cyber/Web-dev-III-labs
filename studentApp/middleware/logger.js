
const timeLoggerMiddleware = (req, res, next) => {
    const startTime = Date.now();

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Timestamp:", new Date().toLocaleString());

    res.on("finish", () => {
        const endTime = Date.now();
        console.log(`Time taken to route is ${endTime - startTime}ms`);
    });

    next();
};

module.exports = timeLoggerMiddleware;
