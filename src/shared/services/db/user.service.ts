import { IAuthDocument } from "@auth/interfaces/auth.interface";
import { AuthModel } from "@auth/models/auth.schema";
import { Helpers } from "@global/helpers/helpers";

class UserService {
  public async addUserData(data: IAuthDocument): Promise<void> {
    await AuthModel.create(data);
  }

}

export const userService: UserService = new UserService();
