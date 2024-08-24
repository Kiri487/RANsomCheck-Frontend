import { Descriptions, Badge } from 'antd';
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
    key: 'state',
    label: 'State',
    children: (
      <Badge
        status={
          data.state === 'Pending' ? 'default' :
          data.state === 'Analyzing' ? 'processing' :
          data.state === 'Finished' ? 'success' :
          'default'
        }
        text={ data.state }
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
    key: 'uploadTime',
    label: 'Upload Time',
		span: 3,
    children: data.uploadTime
  },
  {
    key: 'apiCalls',
    label: 'API Calls',
		labelStyle: { width: '11%'},
		span: 3,
    children: data.apiCalls.join(', '),
  }
];

export default function Details() {
	return (
		<Descriptions
			title="Analysis Details" 
			bordered 
			items={items}
		/>
	);
}