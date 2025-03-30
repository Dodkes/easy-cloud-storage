import "./App.css";
import React from "react";
import { FileList } from "./FileList";

function App() {
  const [files, setFiles] = React.useState<FileList | null>(null);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  return (
    <div className="container">
      <h4>Dodkes cloud storage</h4>
      <div
        className="drop-zone"
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <p>Drop files here or click to upload</p>
      </div>
      <input
        onChange={handleOnChange}
        hidden
        type="file"
        id="file-input"
        multiple
        accept="image/*"
      />
      <FileList files={files} />
    </div>
  );
}

export default App;
