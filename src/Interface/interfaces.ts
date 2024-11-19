export interface CardPlan {
  betterBenefit: boolean;
}
export interface LoginInterface {
  cpf: string;
  password: string;
}
export interface User {
  id: string;
  nome: string;
  cpf: string;
  birthday: string;
  month_as_member: number;
  weight: string;
  days_before: string;
  time: string;
  attended: boolean;
  is_adm: boolean;
}

export interface BannerProps {
  text: string;
}

export interface UnidadeProps {
  Localizacao: string;
  Link: string;
  NomeUnidade: string;
  ImageLink: string;
}
