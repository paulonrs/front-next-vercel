import API_BASE_URL from "@/config/config";

export async function fetchWrapper<T>({
  url,
  method = "GET",
  body = {},
}: {
  url: string;
  method?: string;
  body?: any;
}): Promise<T> {
  try {
    const options: RequestInit = {};
    options.method = method;
    options.headers = {
      "Content-Type": "application/json",
    };
    if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
    }

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
