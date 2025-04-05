import toast from "react-hot-toast";

export default function SubmitButton({ files }: { files: FileList | null }) {
  const handleSubmit = async () => {
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Files uploaded successfully!");
      } else {
        toast.error("Failed to upload files.");
      }
    } catch (error) {
      toast.error("An error occurred while uploading files.");
      console.error("Error uploading files:", error);
    }
  };

  return (
    <button onClick={handleSubmit} className="btn-upload">
      Upload
    </button>
  );
}
