import User, { IUser } from "./user";

export interface IUserRepository {
	signUp(user: IUser): Promise<IUser>;
	signIn(user: string): Promise<IUser | null>;
}

class UserRepository implements IUserRepository {
	private UserModel = User;

	public async signUp(user: IUser): Promise<IUser> {
		const newUser: IUser = new this.UserModel(user);
		return await newUser.save();
	}

	public async signIn(email: string): Promise<IUser | null> {
		const userFound: IUser | null = await this.UserModel.findOne({ email: email });
		if (userFound === null) return null;
		return userFound;
	}
}

export default new UserRepository();
