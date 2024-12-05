"use client";
import { useEffect, useState } from "react";
import { Form, Input, Select, InputNumber, message } from "antd";
import styles from "./styles.module.scss";
import { predict } from "@/services/Predicition";

export default function Prediction() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
      duration: 4,
    });
  };
  const [weight, setWeight] = useState<number>(0);
  const [classType, setClassType] = useState<string>("aqua");
  const [time, setTime] = useState<string>("AM");
  const [day, setDay] = useState<string>("Monday");
  const [predictResult, setPredictionResult] = useState<any>();
  const handleSubmit = () => {
    const dados = {
      weight,
      classType,
      time,
      day,
    };

    try {
      const prediction = predict(dados);
      setPredictionResult(prediction);
      setTimeout(() => {
        success(
          "This is a prompt message for success, and it will disappear in 5 seconds"
        );
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    success(`Based on the data, that student is ${predictResult}% to attend`);
  }, []);
  return (
    <>
      {" "}
      {contextHolder}
      <section className="content">
        <h2 className={styles.title}>
          Send the data for the <span className="green">Prediction</span>
        </h2>
        <Form className={styles.form} onFinish={handleSubmit}>
          <InputNumber
            min={1}
            max={10}
            placeholder="Weight"
            value={weight}
            onChange={(value) => setWeight(value)}
          />
          <Select
            showSearch
            placeholder="Select type of the class"
            options={[
              { value: "aqua", label: "Aqua" },
              { value: "cycling", label: "Cycling" },
              { value: "hiit", label: "HIIT" },
              { value: "strength", label: "Strength" },
              { value: "yoga", label: "Yoga" },
            ]}
            onChange={(value) => setClassType(value)}
          />
          <Select
            showSearch
            placeholder="Select the time"
            options={[
              { value: "1", label: "AM" },
              { value: "2", label: "PM" },
            ]}
            onChange={(value) => setTime(value)}
          />
          <Select
            showSearch
            placeholder="Select the day of the class"
            options={[
              { value: "monday", label: "Monday" },
              { value: "tuesday", label: "Tuesday" },
              { value: "wednesday", label: "Wednesday" },
              { value: "thursday", label: "Thursday" },
              { value: "friday", label: "Friday" },
              { value: "saturday", label: "Saturday" },
              { value: "sunday", label: "Sunday" },
            ]}
            onChange={(value) => setDay(value)}
          />
          <Input type="submit" value="Enviar" />
        </Form>
      </section>
    </>
  );
}
