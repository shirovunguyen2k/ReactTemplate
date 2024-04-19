type Del = {
  id: string;
  handleDelete: (id: string) => void;
};
const ButtonDelete = ({ id, handleDelete }: Del) => {
  return (
    <div>
      <button
        type="submit"
        className="pr-0 text-yellow-700 pl-60"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default ButtonDelete;
