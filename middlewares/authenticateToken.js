import jwt from "jsonwebtoken";

export default (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	// console.log(authHeader);
	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
		console.log(err);
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};
