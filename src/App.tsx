import "./App.css";
import React from "react";
import { FileList } from "./FileList";
import { File } from "akar-icons";
import { calculateSize } from "./utils";

function App() {
  const [files, setFiles] = React.useState<FileList | null>(null);
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove("drag-over");
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove("drag-over");
    event.preventDefault();
    const files = event.dataTransfer.files;
    setFiles(files);
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const getTotalSize = () => {
    if (!files) return 0;
    let totalSize = 0;
    Array.from(files).forEach((file) => {
      totalSize += file.size;
    });
    return calculateSize(totalSize);
  };

  return (
    <div className="app-container">
      <div
        className="drop-zone"
        onClick={() => document.getElementById("file-input")?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
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
        accept="*"
      />
      {files && files.length && (
        <>
          <FileList files={files} />
          <div className="files-count">{`${
            files.length
          } files selected. (${getTotalSize()})`}</div>
          <button className="btn-upload">Upload</button>
        </>
      )}
    </div>
  );
}

export default App;
