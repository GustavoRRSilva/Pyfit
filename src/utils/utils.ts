export const isLogged = () => {
  return localStorage.getItem("id");
};

export const formatarCPF = (cpf: string) => {
  // Remove qualquer caractere que não seja número
  const apenasNumeros = cpf.replace(/\D/g, "");

  // Verifica se o CPF possui 11 dígitos
  if (apenasNumeros.length !== 11) {
    throw new Error("CPF inválido. Deve conter exatamente 11 números.");
  }

  // Formata o CPF no padrão 000.000.000-00
  return apenasNumeros.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
};

export const formatarDataComValidacao = (data: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/; // Valida o formato "YYYY-MM-DD"

  if (!regex.test(data)) {
    throw new Error("Formato de data inválido. Use o formato YYYY-MM-DD.");
  }

  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
};

export const formatarHora = (horario: string) => {
  // Divide a string do horário no formato "HH:MM:SS"
  const [horas, minutos] = horario.split(":");

  // Retorna no formato "HH:MM"
  return `${horas}:${minutos}`;
};

export const traduzirDiaSemana = (diaIngles: string) => {
  const diasDaSemana = {
    Sunday: "Domingo",
    Monday: "Segunda-feira",
    Tuesday: "Terça-feira",
    Wednesday: "Quarta-feira",
    Thursday: "Quinta-feira",
    Friday: "Sexta-feira",
    Saturday: "Sábado",
  } as const; // Usando `as const` para garantir que as chaves sejam literais e não apenas strings genéricas

  // Garantir que diaIngles é uma chave válida no objeto diasDaSemana
  if (diaIngles in diasDaSemana) {
    return diasDaSemana[diaIngles as keyof typeof diasDaSemana]; // Cast para garantir o tipo correto
  } else {
    return "Dia inválido";
  }
};

// Exemplo de uso
const diaIngles = "Monday";
console.log(traduzirDiaSemana(diaIngles)); // Saída: Segunda-feira
