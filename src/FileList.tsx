import React from "react";
import { File } from "akar-icons";

export function FileList({ files }: { files: FileList | null }) {
  const calculateSize = (size: number) => {
    if (size < 1024) {
      return size + " B";
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + " KB";
    } else if (size < 1024 * 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (size / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  };

  return (
    <div className="file-list-container">
      <table className="file-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {files &&
            Array.from(files).map((file) => (
              <tr key={file.name}>
                <td>
                  <div className="file-name-container">
                    <File className="icon" size={20} />
                    {file.name}
                  </div>
                </td>
                <td>{calculateSize(file.size)}</td>
                <td>{file.type}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
