import { Express } from "express";
import { userController } from "./controller";

export class Routes {
	private userController: userController;

	constructor(app: Express, userController: userController) {
		this.userController = userController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route("/api/signup").post(this.userController.addNewUser);

		app.route("/api/signin").post(this.userController.getUser);
	}
}
