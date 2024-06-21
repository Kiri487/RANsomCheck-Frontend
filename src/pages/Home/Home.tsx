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
    </div>
  );
}