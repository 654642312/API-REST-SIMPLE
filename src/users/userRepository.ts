import User, { IUser } from "./user";

export interface IUserRepository {
	signUp(user: IUser): Promise<IUser>;
	signIn(user: IUser): Promise<IUser | null>;
}

class UserRepository implements IUserRepository {

	private UserModel = User;

	public async signUp(user: IUser): Promise<IUser> {
		const newUser: IUser = new this.UserModel(user);
		return await newUser.save();
	}

	public async signIn(user: IUser): Promise<IUser | null> {
		const userFind: IUser | null = await this.UserModel.findOne({ email: user.email });
    if(userFind === null) return null 
    return userFind;
	}
}

export default new UserRepository
