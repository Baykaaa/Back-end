import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
export class AuthService {
  private static User = { username: "Muuluu", password: "1234" };
  static async login(username: string, password: string) {
    let token = "hha";
    if (this.User.username == username && this.User.password == password) {
      token = jwt.sign({ id: this.User.username }, "gvhdbfh", {
        expiresIn: "60m",
      });
      return { token: token };
    }
    throw Error;
  }
}
