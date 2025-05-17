import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = (req, res, next) => {
    try {
        const {
            headers: { authorization },
        } = req;
        const authToken = req.cookies.token || authorization;
        if (!authToken || authToken === "null") {
            res.clearCookie("token", { path: "/" });
            throw new ErrorResponse("Access denied!", 401);
        }
        const secret = process.env.JWT_SECRET;
        try {
            var decoded = jwt.verify(authToken, secret);
        } catch (err) {
            res.clearCookie("token", { path: "/" });
            throw new ErrorResponse("Invalid Token", 400);
        }
        const payload = jwt.verify(authToken, secret);
        req.payload = payload;
        next();
    } catch (e) {
        next(e);
    }
};

export default verifyToken;
