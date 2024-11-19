const id = localStorage.getItem("id");

export const getUserData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}users/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText ? errorText : "");
    }
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText ? errorText : "");
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      return { message: "Dados obtidos" };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Erro inesperado");
    } else {
      throw new Error("Erro inesperado");
    }
  }
};

export const getAllUsersData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText ? errorText : "");
    }
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText ? errorText : "");
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      return { message: "Dados obtidos" };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Erro inesperado");
    } else {
      throw new Error("Erro inesperado");
    }
  }
};
