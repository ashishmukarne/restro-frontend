import axios from "axios";
import { API_URL } from "../../../config";
import { UserAuth } from "../UserAuth";

export class RestroService {
  static list = (name: string, sorting: number) => {
    return axios
      .get(`${API_URL}/restros/`, {
        params: { name, sorting },
        headers: {
          Authorization: UserAuth.getToken(),
        },
      })
      .then((response) => response.data);
  };
}
