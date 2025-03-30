import "./App.css";
import React from "react";
import { FileList } from "./FileList";
import { File } from "akar-icons";

function App() {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setFiles(files);
  };
  const [files, setFiles] = React.useState<FileList | null>(null);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  return (
    <div className="app-container">
      <div
        className="drop-zone"
        onClick={() => document.getElementById("file-input")?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <File size={24} />
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
      {files && files.length && (
        <>
          <FileList files={files} />
          <div className="files-count">{`${files.length} files selected.`}</div>
          <button className="btn-upload">Upload</button>
        </>
      )}
    </div>
  );
}

export default App;
