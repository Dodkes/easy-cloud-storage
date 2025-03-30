import "./App.css";
import React from "react";
import { FileList } from "./FileList";
import { calculateSize } from "./utils";
import DropZone from "./DropZone";
import InputFile from "./InputFile";

function App() {
  const [files, setFiles] = React.useState<FileList | null>(null);

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
      <DropZone setFiles={setFiles} />
      <InputFile setFiles={setFiles} />
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
