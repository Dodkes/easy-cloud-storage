import React from "react";
import { File } from "akar-icons";

export default function DropZone({
  setFiles,
}: {
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}) {
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

  return (
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
  );
}
