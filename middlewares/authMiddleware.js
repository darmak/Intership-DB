import jsonwebtoken from "jsonwebtoken";

const TOKEN_KEY = 'Mkjikb87urjb7i6y4b6n6be64ibij';

export const authMiddleware = (req, res, next) => { 
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], TOKEN_KEY, function(err, decode) {
        if (err) return "error";
        req.user = decode;
        next();
        });
    } else {
        req.user = undefined;
        next();
    }
}