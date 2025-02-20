import { Card } from "antd";
import type { TableProps } from "antd";

import MainTable from "../../shared/table/table";
import SmallCard from "../../shared/smallCard/smallCard";
import ChartCard from "../../shared/chart-card/chartCard";

import styles from "./main.module.css";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const Main = () => {
  const data: DataType[] = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "3",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "5",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "6",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "7",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "8",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "9",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "10",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "11",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "12",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (value: string) => <p>${value}</p>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (value: string) => <p>${value}</p>,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.cardContainer} landing-card-container`}>
        {[1, 2, 3, 4].map((item: number, key: number) => (
          <ChartCard name={item} key={key} />
        ))}
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.plan}>
          <Card title="Transactions">
            <MainTable data={data} columns={columns} />
          </Card>
        </div>

        <div className={styles.countryReport}>
          <Card title="Transactions">
            <Card type="inner" className={styles.innerCard}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                (_: number, key: number) => (
                  <SmallCard key={key} />
                )
              )}
            </Card>
          </Card>
        </div>
      </div>

      {/* <div className={styles.reportContainer}>
        {[1, 2, 3].map((_: number, key: number) => (
          <Card
            title="Transactions"
            className={styles.reportContainerItem}
            key={key}
          >
            {[1, 2, 3, 4].map((_: number, key: number) => (
              <div className={styles.cardItem} key={key}>
                <Avatar
                  className={styles.cardItemImage}
                  icon={<UserOutlined />}
                />
                <div className={styles.cardItemInfo}>
                  <p>Name</p>
                  <p>Location</p>
                </div>
                <div className={styles.cardItemRemark}>
                  <p>$500</p>
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default Main;
