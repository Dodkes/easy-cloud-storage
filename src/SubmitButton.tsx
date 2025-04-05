import { useState } from "react";
import toast from "react-hot-toast";

export default function SubmitButton({
  files,
  setFiles,
}: {
  files: FileList | null;
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}) {
  const [isUploading, setIsUploading] = useState(false);
  const env = import.meta.env;

  const handleSubmit = async () => {
    if (!files) return;
    setIsUploading(true);

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(`${env.VITE_SERVER}/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Files uploaded successfully!");
        setFiles(null); // Clear the files after successful upload
      } else {
        toast.error("Failed to upload files.");
      }
    } catch (error) {
      toast.error("An error occurred while uploading files.");
      console.error("Error uploading files:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    setFiles(null);
    toast.success("Files cleared.");
  };

  return (
    <>
      <button
        disabled={isUploading}
        onClick={handleSubmit}
        className="btn-upload"
      >
        {isUploading ? "Uploading" : "Upload"}
      </button>
      {!isUploading && (
        <button onClick={handleClear} className="btn-clear">
          Clear
        </button>
      )}
    </>
  );
}
