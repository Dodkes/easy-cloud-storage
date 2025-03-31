import React from "react";

export default function InputFile({
  setFiles,
}: {
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };
  return (
    <input
      onChange={handleOnChange}
      hidden
      type="file"
      id="file-input"
      multiple
      accept="*"
    />
  );
}
