import { Link } from "react-router-dom";
import { Table } from "antd";
import { WarningOutlined } from "@ant-design/icons";

// fake data

const generateFakeGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const getFakeState = () => {
  const states = ["Pending", "Analyzing", "Finished"];
  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
};

const generateFakeDataSource = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const state = getFakeState();
    data.push({
      number: i,
      id: generateFakeGUID(),
      name: `test_file_${i}.exe`,
      state: state,
      result: state === 'Finished' ? Math.floor(Math.random() * 2) : -1,
    });
  }
  return data;
};

const dataSource = generateFakeDataSource(25);

// fake data

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
          "No result yet"
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