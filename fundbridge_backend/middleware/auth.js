const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
    const authHeader = req.headers.authorization;

    const token = authHeader?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message : "Authentication required"
        });
    }
    try{
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;

        next();
    }catch(error){
        return res.status(403).json({
            message : "Invalid or expired token"
        });

    }
}


function optionalAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
        return next();
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
    } catch (error) {
        // Token invalid or expired, proceed without req.user
    }
    next();
}

authenticateToken.optionalAuth = optionalAuth;

module.exports = authenticateToken;