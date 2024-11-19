import { User } from "@/Interface/interfaces";
import { getAllUsersData } from "@/services/User";
import {
  formatarCPF,
  formatarDataComValidacao,
  formatarHora,
  isLogged,
  traduzirDiaSemana,
} from "@/utils/utils";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./style.module.scss";
export default function TableComponent() {
  const router = useRouter();
  const [allData, setAlldata] = useState<User[]>();

  useEffect(() => {
    const initializeData = async () => {
      try {
        const allUsersData = await getAllUsersData();
        setAlldata(allUsersData);
      } catch (e) {
        console.log(e);
      }
    };

    if (isLogged()) {
      initializeData();
    } else {
      router.push("/");
    }
  }, [router]);

  console.log(allData);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "name",
      align: "center" as const,
      width: "160px",
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      key: "cpf",
      align: "center" as const,
      render: (cpf: string) => formatarCPF(cpf),
      width: "200px",
    },
    {
      title: "Data de Nascimento",
      dataIndex: "birthday",
      key: "birthday",
      align: "center" as const,
      render: (birthday: string) => formatarDataComValidacao(birthday),
    },
    {
      title: "Meses Como membro",
      dataIndex: "months_as_member",
      key: "months",
      align: "center" as const,
    },
    {
      title: "Peso",
      dataIndex: "weight",
      key: "weight",
      align: "center" as const,
      render: (weight: string) => weight.replace(".", ","),
    },
    {
      title: "Dias após",
      dataIndex: "days_before",
      key: "days_before",
      align: "center" as const,
    },
    {
      title: "Dia da semana da aula",
      dataIndex: "day_of_week",
      key: "weekDay",
      align: "center" as const,
      render: (day_of_week: string) => traduzirDiaSemana(day_of_week),
    },
    {
      title: "Hora da aula",
      dataIndex: "time",
      key: "time",
      align: "center" as const,
      render: (time: string) => formatarHora(time),
    },
    {
      title: "Atendido?",
      dataIndex: "attended",
      key: "attended",
      align: "center" as const,
    },
  ];

  return (
    <Table
      dataSource={allData}
      columns={columns}
      className={styles.customTable}
    />
  );
}
