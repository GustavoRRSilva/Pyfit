"use client";
import { useState } from "react";
import TypedInputNumber from "antd/es/input-number";
import styles from "./styles.module.scss";
import { Form, Input, Select } from "antd";

export default function Prediction() {
  const [weight, setWeight] = useState<number | null>(null);
  const [classType, setClassType] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log({
      weight,
      classType,
      time,
      day,
    });
  };

  return (
    <section className="content">
      <h2 className={styles.title}>
        Send the data for the <span className="green">Prediction</span>
      </h2>
      <Form className={styles.form} onFinish={handleSubmit}>
        <TypedInputNumber
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
  );
}
