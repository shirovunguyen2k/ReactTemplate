import INote from "../types/INote";

type LNote = {
  lNote: INote;
  handleDelete: (id: string) => void;
};

const ListNote = (propsNote: LNote) => {
  const { lNote, handleDelete } = propsNote;

  return (
    <div className="flex flex-col p-5 m-10 border-gray-300 shadow-md w-1/4">
      <h2 className="text-lg">{lNote.title}</h2>
      <span>{lNote.content}</span>
      <button
        type="submit"
        className="pr-0 text-yellow-700 pl-60"
        onClick={() => handleDelete(lNote.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default ListNote;
