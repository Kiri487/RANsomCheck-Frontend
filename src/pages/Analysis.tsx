import { Link } from "react-router-dom";
import { Table } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { generateFakeDataSource } from '../FakeData';

// fake data
const dataSource = generateFakeDataSource(25);

const columns = [
  {
    title: <span style={{ color: "#1677ff" }}>No.</span>,
    dataIndex: "number",
    key: "number",
    width: '10%',
    sorter: (a: any, b: any) => a.number - b.number
  },
  {
    title: <span style={{ color: "#1677ff" }}>Name</span>,
    dataIndex: "name",
    key: "name",
    width: '50%',
    render: (text: string, record: any) => (
      <Link to={`/analysis/details?id=${record.id}`}>
        {text}
      </Link>
    ),
    sorter: (a: any, b: any) => a.name.localeCompare(b.name)
  },
  {
    title: <span style={{ color: "#1677ff" }}>State</span>,
    dataIndex: "state",
    key: "state",
    width: '20%',
    filters: [
      { text: 'Pending', value: 'Pending' },
      { text: 'Analyzing', value: 'Analyzing' },
      { text: 'Finished', value: 'Finished' }
    ],
    onFilter: (value: any, record: any) => record.state === value,
    sorter: (a: any, b: any) => a.state.localeCompare(b.state)
  },
  {
    title: <span style={{ color: "#1677ff" }}>Result</span>,
    dataIndex: "result",
    key: "result",
    width: '20%',
    render: (text: number) => (
      <span>
        {text === 1 ? (
          <span style={{ color: "#ff4d4f", fontWeight: "bold" }}>
            <WarningOutlined style={{ color: "#ff4d4f", marginRight: "0.3rem" }} />
            Ransomware
          </span>
        ) : text === 0 ? (
          "Non-ransomware"
        ) : (
          ""
        )}
      </span>
    ),
    filters: [
      { text: 'Ransomware', value: 1 },
      { text: 'Non-ransomware', value: 0 }
    ],
    onFilter: (value: any, record: any) => record.result === value,
    sorter: (a: any, b: any) => a.result - b.result
  }
];

export default function Analysis() {
  return(
    <Table 
      pagination={{ pageSize: 10 }} 
      dataSource={dataSource} 
      columns={columns} 
      rowClassName={(record) => record.result === 1 ? "ransomware-row" : ""}/>
  );
}