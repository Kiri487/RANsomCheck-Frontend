import "./Analysis.css";

var testData = [
  {
    fileId: 1,
    fileName: "test_file_1.exe",
    result: 1
  },
  {
    fileId: 2,
    fileName: "test_file_2.exe",
    result: 0
  },
  {
    fileId: 3,
    fileName: "test_file_3.exe",
    result: 0
  }
];

export default function Analysis() {
  if (testData.length > 0) {
    return (
      <div className="analysis">
        <h3>Analyze results</h3>
        <table>
          <thead>
            <tr>
              <th>File ID</th>
              <th>Name</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {testData.map((data) => (
              <tr key={data.fileId} className={data.result === 1 ? "warning" : ""}>
                <td>{data.fileId}</td>
                <td>{data.fileName}</td>
                <td>{data.result === 1 ? "Ransomware" : "Non-ransomware"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } 
  else {
    return (
      <div className="analysis">
        <h3>Analyze results</h3>
        <p>No analysis result records yet.</p>
      </div>
    );
  }
}