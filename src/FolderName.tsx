import { FolderAdd } from "akar-icons";

export default function FolderName({
  setFolderName,
}: {
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="folder-name-container">
      <label htmlFor="folder-name">
        <FolderAdd size={70} strokeWidth={1} />
      </label>
      <input
        onChange={(e) => setFolderName(e.target.value)}
        id="folder-name"
        type="text"
        maxLength={10}
      />
    </div>
  );
}
