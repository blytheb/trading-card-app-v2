import admin from "firebase-admin";

const verifyToken = async (req, res, next) => {
    const {token} = req.body;
    try {
        const decoded = await admin.auth().verifyIdToken(token);
        res.status(200).json({uid: decoded.uid});
    } catch (error) {
        res.status(401).json({error: "Unathorized"});
    }
};

module.exports = {verifyToken};