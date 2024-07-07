import "./Home.css";
import UPLOAD_FILE_ICON from "../../assets/UploadFile.png";

function FileUpload() {
  return (
    <label htmlFor="input" className="file-input">
      <input hidden id="input" type="file" />
      <img src={UPLOAD_FILE_ICON} />
      <p>Upload File</p>
    </label>
  );
}

export default function Home() {
  return (
    <div className="home">
      <FileUpload />
      <ul className="home-directions">
        <li>Usage: Click the Upload File block above and select the file you want to analyze.</li>
        <li>Accepted file types: Windows Portable Executable files.</li>
      </ul>
    </div>
  );
}