import { Request, Response } from "express";
import UserRepository from "./userRepository";

export class userController {
			public async addNewUser(req: Request, res: Response): Promise<Response> {
							const newUser = await UserRepository.signUp(req.body);
				      return res.status(200).json({ message: "this user was add sucessfully" });
			}	

      public async getUser(req: Request, res: Response): Promise<Response> {
				const userFound = await UserRepository.signIn(req.body.email);
				if(userFound === null) return res.status(400).json({ message: "user not found" })
				return res.status(200).json({ message: userFound });
			}
} 
