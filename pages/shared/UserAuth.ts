export class UserAuth {
  static readonly CookieName = "restro-user";

  static setToken(user: any) {
    const str = JSON.stringify(user);
    localStorage.setItem(UserAuth.CookieName, str);
    console.log("str: ", str, UserAuth.CookieName);
  }

  static getToken() {
    let user: any = localStorage.getItem(UserAuth.CookieName);

    if (!user) {
      return "";
    }

    user = JSON.parse(user);
    return user.token;
  }
}
