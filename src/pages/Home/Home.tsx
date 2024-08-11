import "./Home.css";
import UPLOAD_FILE_ICON from "../../assets/UploadFile.png";

function FileUpload() {
  const onFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData
        });

        const result = await response.json();
  
        if (response.ok) {
          const userConfirmed = confirm(`${result.message} Do you want to upload another file?`);
          
          if (userConfirmed) {
            (event.target as HTMLInputElement).value = "";
          } else {
            window.location.href = "/analysis";
          }
        } else {
          alert(result.error || result.message);
        }
      } catch (error) {
        alert("System error occurred.");
      }
    }
  };
  
  return (
    <label htmlFor="input" className="file-input">
      <input hidden id="input" type="file" onChange={onFileUpload} />
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