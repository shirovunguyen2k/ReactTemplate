import React, { ChangeEvent, useState } from "react";
import Header from "./Header";
import ListNote from "./ListNote";
import typeNote from "../types/INote";
import { v4 as uuidv4 } from "uuid";
import AppForm, { FieldType } from "./AppForm";

const AppKeeper = () => {
  const [listNote, setNote] = useState<typeNote[]>([]);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newTitle = e.target.value;
  //   setTitle(newTitle);
  // };
  // const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newContent = e.target.value;
  //   setContent(newContent);
  // };
  const hanleClick = (values: FieldType) => {
    const itemNote: typeNote = {
      id: uuidv4(),
      title: values.title,
      content: values.content,
    };
    setNote([...listNote, itemNote]);
    // setTitle("");
    // setContent("");
  };

  const handleDelete = (index: string) => {
    const newArr = [...listNote];
    const reseacrch = newArr.filter((item) => item.id !== index);
    setNote(reseacrch);
  };
  return (
    <div>
      <Header />
      <AppForm handleClick={hanleClick} />
      {/* <Input
        handleChangeTitle={handleChangeTitle}
        title={title} 
        handleChangeContent={handleChangeContent}
        content={content}
        handleClick={hanleClick}
      /> */}

      <div className="grid grid-cols-4">
        {listNote.map((note) => (
          <ListNote lNote={note} key={note.id} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
export default AppKeeper;
