import { useState } from "react";
import { Table } from "antd";

import type { TableProps } from "antd";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

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
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      className={styles.table}
      size="middle"
      dataSource={props.data}
      columns={props.columns}
      rowSelection={rowSelection}
      pagination={false}
      scroll={{ y: "46vh" }}
    />
  );
};

export default MainTable;
