import { ResponseApi, User } from "@/models";
import { fetchWrapper } from "./fetchWrapper";

export class UserService {
  private baseUrl: string;

  constructor(baseUrl: string = "users") {
    this.baseUrl = baseUrl;
  }

  public async getUsers(search: string = ""): Promise<ResponseApi> {
    try {
      const response = await fetchWrapper<ResponseApi>({
        url: `${this.baseUrl}?search=${search}`,
        method: "GET",
      });
      return response;
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
      throw erro;
    }
  }

  public async addUser(user: User): Promise<ResponseApi> {
    try {
      const response = await fetchWrapper<ResponseApi>({
        url: this.baseUrl,
        method: "POST",
        body: user,
      });
      console.log(response);
      return response;
    } catch (erro) {
      console.error("Erro ao adicionar usuário:", erro);
      throw erro;
    }
  }

  public async editUser(user: User): Promise<ResponseApi> {
    try {
      if (!user.id) {
        throw new Error("O ID do usuário é necessário para editar");
      }
      const response = await fetchWrapper<ResponseApi>({
        url: `${this.baseUrl}/${user.id}`,
        method: "PUT",
        body: user,
      });
      console.log(response);
      return response;
    } catch (erro) {
      console.error("Erro ao editar usuário:", erro);
      throw erro;
    }
  }
}
