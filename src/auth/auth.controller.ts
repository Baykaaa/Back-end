import { AuthService } from "./auth.service";
export class AuthController {
  static async login(req: any, res: any) {
    let data = await AuthService.login(req.body.username, req.body.password);
    res.send(data);
  }
}
