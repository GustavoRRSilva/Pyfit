import { Predict } from "@/Interface/interfaces";

export const predict = async (dados: Predict) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}predict/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText ? errorText : "");
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Erro inesperado");
    } else {
      throw new Error("Erro inesperado");
    }
  }
};
