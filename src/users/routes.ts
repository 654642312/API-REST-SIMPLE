import { Express } from "express";
import { userController } from "./controller";

export class Routes {
	private userController: userController;

	constructor(app: Express, userController: userController) {
		this.userController = userController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route("/api/users")
			.post(this.userController.getUser)
			.post(this.userController.addNewUser);
	}
}
