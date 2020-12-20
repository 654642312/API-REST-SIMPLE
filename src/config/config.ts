export default {
	DB: {
		URI: process.env.MONGODB_URI || "mongodb://localhost/mongodb-api",
		USER: process.env.USER,
		PASSWORD: process.env.PASSWORD
	}
};
