import React from "react";
import { Table } from "antd";

import type { TableProps } from "antd";

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
      pagination={false}
      dataSource={props.data}
      columns={props.columns}
      scroll={{ y: "47vh" }}
    />
  );
};

export default MainTable;
