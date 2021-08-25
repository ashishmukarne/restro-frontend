import axios from "axios";
import { API_URL } from "../../../config";
import { ILoginPayload } from "../../components/LoginComponent";

export class UserService {
  static login = (payload: ILoginPayload) => {
    return axios
      .post(`${API_URL}/users/login`, payload)
      .then((response) => response.data);
  };
}
