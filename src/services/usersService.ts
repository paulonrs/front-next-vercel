import { ResponseApi, User } from "@/models";
import { fetchWrapper } from "./fetchWrapper";

export const getUsers = async (search: string): Promise<ResponseApi> => {
  try {
    const response = await fetchWrapper<ResponseApi>("users", "GET");
    console.log(response);
    return response;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
    throw erro;
  }
};
