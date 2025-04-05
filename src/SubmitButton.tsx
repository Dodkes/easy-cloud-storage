export default function SubmitButton({ files }: { files: FileList | null }) {
  const handleSubmit = async () => {
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("file", file);
    });

    const response = await fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Files uploaded successfully!");
    } else {
      alert("Failed to upload files.");
    }
  };

  return (
    <button onClick={handleSubmit} className="btn-upload">
      Upload
    </button>
  );
}
