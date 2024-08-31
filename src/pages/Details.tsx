import { Descriptions, Badge, Alert } from 'antd';
import type { DescriptionsProps } from 'antd';
import { generateFakeData } from '../FakeData';

// fake data
const data = generateFakeData();

const items: DescriptionsProps['items'] = [
  {
    key: 'name',
    label: 'Name',
    children: data.name
  },
  {
    key: 'status',
    label: 'Status',
    children: (
      <Badge
        status={
          data.status === 'Pending' ? 'default' :
          data.status === 'Analyzing' ? 'processing' :
          data.status === 'Finished' ? 'success' :
          data.status === 'Failed' ? 'error' :
          'default'
        }
        text={ data.status }
      />
    )
  },
  {
    key: 'result',
    label: 'Result',
    children: (
      data.result === 1 ? (
        <span style={{ color: "#ff4d4f", fontWeight: "bold" }}>
          Ransomware
        </span>
      ) : data.result === 0 ? "Non-ransomware" : "N/A"
    )
  },
  {
    key: 'SHA256',
    label: 'SHA256',
		span: 3,
    children: data.SHA256
  },
	{
    key: 'uploadTime',
    label: 'Upload Time',
		span: 3,
    children: data.uploadTime
  },
  {
    key: 'analysisStart',
    label: 'Analysis Start',
		span: 3,
    children: data.analysisStart
  },
  {
    key: 'analysisFinished',
    label: 'Analysis Finished',
		span: 3,
    children: data.analysisFinished
  },
  {
    key: 'apiCalls',
    label: 'API Calls',
		labelStyle: { width: '13%'},
		span: 3,
    children: data.apiCalls.join(', '),
  }
];

export default function Details() {
	return (
    <>
      {data.result === 1 && (
        <Alert
          message={<span style={{ color: "#ff4d4f", fontWeight: "bold", fontSize: "1.3rem" }}>Danger</span>}
          description={<span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Ransomware Alert! Do not open this file!</span>}
          type="error"
          style={{ marginBottom: "1rem" }}
        />
      )}
      <Descriptions
        title="Analysis Details" 
        bordered 
        items={items}
		  />
    </>
	);
}