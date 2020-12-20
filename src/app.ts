import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { UsersModule } from "./users";

class App {
	public app: Express = express();

	constructor() {
		this.config();
		this.initMOdules();
	}

	private config(): void {
		this.app.set("PORT", process.env.PORT || 3000);
    this.app.use(cors())
    this.app.use(morgan("dev"));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	private initMOdules() {
		new UsersModule(this.app);
	}
}

export default new App().app;
