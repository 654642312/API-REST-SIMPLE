import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config/config";

class Database {
	public config = config;
	private mongoose = mongoose;
	private connection = this.mongoose.connection;

	constructor() {
		this.initConnection();
	}

	get options(): ConnectionOptions {
		const dbOptions: ConnectionOptions = {
			useNewUrlParser: true,
			useUnifiedTopology: true
		};
		return dbOptions;
	}

	private initConnection(): void {
		this.mongoose.connect(config.DB.URI, this.options);
		this.connection.once("open", () => {
			console.log("database is connected");
		});

		this.connection.on("err", err => {
			console.log(err);
			process.exit(0);
		});
	}
}

new Database();
