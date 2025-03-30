import React from "react";
import { File } from "akar-icons";
import { calculateSize } from "./utils";

export function FileList({ files }: { files: FileList | null }) {
  return (
    <div className="file-list-container">
      <table className="file-list">
        <thead className="file-list-head">
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
                    <File className="file-name-icon" size={20} />
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
