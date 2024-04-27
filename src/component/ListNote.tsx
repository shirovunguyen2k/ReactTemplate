import INote from "../types/INote";

type LNote = {
  lNote: INote;
  handleDelete: (id: string) => void;
};

const ListNote = (propsNote: LNote) => {
  const { lNote, handleDelete } = propsNote;

  return (
    <div className="flex flex-col p-3 m-10 border-gray-300 shadow-md">
      <h2 className="text-lg p-2">{lNote.title}</h2>
      <span className="p-2">{lNote.content}</span>
      <div className="">
        <button
          type="submit"
          className="text-yellow-700 pt-5"
          onClick={() => handleDelete(lNote.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default ListNote;
