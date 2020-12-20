import { Express } from "express";
import { userController } from "./controller";
import { Routes } from "./routes";

export class UsersModule {
	public routes: Routes;

	constructor(app: Express) {
		this.routes = new Routes(app, new userController());
	}
}
