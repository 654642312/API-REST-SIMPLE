import express, { Express } from "express";

class App {
	public app: Express = express();

	constructor() {
		this.config();
	}

	private config(): void {
		this.app.set("PORT", process.env.PORT || 3000);
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}
}

export default new App().app;
