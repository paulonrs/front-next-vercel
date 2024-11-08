import API_BASE_URL from "@/config/config";

export async function fetchWrapper<T>(
  url: string,
  method: string = "GET",
  options: RequestInit = {}
): Promise<T> {
  try {
    options.method = options.method;
    options.headers = {
      "Content-Type": "application/json",
    };

    const resposta: Response = await fetch(`${API_BASE_URL}/${url}`, options);

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.statusText}`);
    }

    return resposta.json();
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
    throw erro;
  }
}
