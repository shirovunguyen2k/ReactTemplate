import { ChangeEvent } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

// type inputType = {
//   handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
//   title: string;
//   handleChangeContent: (e: ChangeEvent<HTMLInputElement>) => void;
//   content: string;
//   handleClick: () => void;
// };
type inputType = {
  handleClick: (values: FieldType) => void;
};

export type FieldType = {
  title: string;
  content: string;
};

const AppForm = ({ handleClick }: inputType) => {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    //console.log("Success:", values);
    handleClick(values);
    form.resetFields();
  };
  return (
    <div className="flex justify-center m-10">
      <Form
        onFinish={onFinish}
        form={form}
        className="grid grid-cols-1 shadow-md border rounded-md border-gray-400 w-1/2"
      >
        <Form.Item<FieldType>
          //label="Username"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
          className="flex items-center"
        >
          <Input placeholder="Title" className="border-none " />
        </Form.Item>
        <Form.Item<FieldType>
          // label="Username"
          name="content"
          rules={[{ required: true, message: "Please input your content!" }]}
        >
          <Input placeholder="Take a note..." className="border-none" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 21 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-yellow-500 rounded-full items-center "
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppForm;

// const Input = ({
//   handleChangeTitle,
//   title,
//   handleChangeContent,
//   content,
//   handleClick,
// }: inputType) => {
//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col shadow-md border rounded-md border-gray-400 m-10 relative w-1/2">
//         <input
//           onChange={handleChangeTitle}
//           value={title}
//           type="text"
//           placeholder="Title"
//           className="focus:outline-none px-3 py-2"
//         />
//         <input
//           onChange={handleChangeContent}
//           value={content}
//           type="text"
//           placeholder="Take a note..."
//           className="focus:outline-none px-3 py-2"
//         />
//         <button
//           onClick={handleClick}
//           type="submit"
//           className="bg-yellow-500 rounded-full absolute p-3 items-center my-14 mx-96"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };
