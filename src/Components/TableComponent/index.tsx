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
        // Adicionando uma `key` única para cada usuário
        const dataWithKeys = allUsersData.map((user: User, index: number) => ({
          ...user,
          key: user.cpf || index, // Use `cpf` como `key` ou o índice como fallback
        }));
        setAlldata(dataWithKeys);
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
      title: "Name",
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
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      align: "center" as const,
      render: (birthday: string) => formatarDataComValidacao(birthday),
    },
    {
      title: "Months as member",
      dataIndex: "months_as_member",
      key: "months",
      align: "center" as const,
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      align: "center" as const,
      render: (weight: string) => weight.replace(".", ","),
    },
    {
      title: "Days before",
      dataIndex: "days_before",
      key: "days_before",
      align: "center" as const,
    },
    {
      title: "Day of week",
      dataIndex: "day_of_week",
      key: "weekDay",
      align: "center" as const,
      render: (day_of_week: string) => traduzirDiaSemana(day_of_week),
    },
    {
      title: "Class time",
      dataIndex: "time",
      key: "time",
      align: "center" as const,
      render: (time: string) => formatarHora(time),
    },
    {
      title: "Attended?",
      dataIndex: "attended",
      key: "attended",
      align: "center" as const,
    },
  ];

  return (
    <section>
      <Table
        dataSource={allData}
        columns={columns}
        className={styles.customTable}
      />
    </section>
  );
}
