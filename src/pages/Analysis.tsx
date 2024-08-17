import { Table } from "antd";
import { WarningOutlined } from "@ant-design/icons";


// fake data

const generateDataSource = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `test_file_${i}.exe`,
      result: Math.floor(Math.random() * 2),
    });
  }
  return data;
};

const dataSource = generateDataSource(20);

// fake data

const columns = [
  {
    title: <span style={{ color: "#1677ff" }}>Id</span>,
    dataIndex: "id",
    key: "id"
  },
  {
    title: <span style={{ color: "#1677ff" }}>Name</span>,
    dataIndex: "name",
    key: "name"
  },
  {
    title: <span style={{ color: "#1677ff" }}>Result</span>,
    dataIndex: "result",
    key: "result",
    render: (text: number) => (
      <span>
        {text === 1 ? (
          <span>
            <WarningOutlined style={{ color: "#ff4d4f", marginRight: "0.3rem" }} />
            Ransomware
          </span>
        ) : (
          "Non-ransomware"
        )}
      </span>
    )
  }
];

export default function Analysis() {
  return(
    <Table pagination={{ pageSize: 8 }} dataSource={dataSource} columns={columns} rowClassName={(record) => record.result === 1 ? "ransomware-row" : ""}/>
  );
}