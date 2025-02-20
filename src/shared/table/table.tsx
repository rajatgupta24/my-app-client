import React from "react";
import { Table } from "antd";

import type { TableProps } from "antd";

import styles from "./table.module.css";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface MainTableProps {
  data: DataType[];
  columns: TableProps<DataType>["columns"];
}

const MainTable = (props: MainTableProps) => {
  return (
    <Table
      className={styles.table}
      size="middle"
      dataSource={props.data}
      columns={props.columns}
      pagination={false}
      scroll={{ y: "46vh" }}
    />
  );
};

export default MainTable;
