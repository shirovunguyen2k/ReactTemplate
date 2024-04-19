import { ChangeEvent } from "react";

type inputType = {
  handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  handleChangeContent: (e: ChangeEvent<HTMLInputElement>) => void;
  content: string;
  handleClick: () => void;
};

const Input = ({
  handleChangeTitle,
  title,
  handleChangeContent,
  content,
  handleClick,
}: inputType) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col shadow-md border rounded-md border-gray-400 m-10 relative w-1/2">
        <input
          onChange={handleChangeTitle}
          value={title}
          type="text"
          placeholder="Title"
          className="focus:outline-none px-3 py-2"
        />
        <input
          onChange={handleChangeContent}
          value={content}
          type="text"
          placeholder="Take a note..."
          className="focus:outline-none px-3 py-2"
        />
        <button
          onClick={handleClick}
          type="submit"
          className="bg-yellow-500 rounded-full absolute p-3 items-center my-14 mx-96"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
