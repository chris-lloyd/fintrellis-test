import React, { useState } from "react";
import Textbox from "../Textbox";
import Textarea from "../Textarea";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../../store/posts/postSlice";
import { toast } from "sonner";

type addPostType = {
  onCloseModal: () => void;
};

const Addpost = ({ onCloseModal }: addPostType) => {
  const dispatch = useDispatch<any>();
  const [textboxValue, setTextboxValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const onChangeTextboxHandler = (e: string) => setTextboxValue(e);
  const onChangeTextareaHandler = (e: string) => setTextareaValue(e);
  
  const onSubmitHandler = async () => {
    if (!textboxValue || !textareaValue) {
      setSubmitError(true);
      return;
    }
    await dispatch(createPostAsync({ textboxValue, textareaValue }));
    setSubmitError(false);
    toast.success('Post created successfully');
    onCloseModal();

  };

  return (
    <div className="flex flex-col">
      <h6 className="font-bold mb-2">Create a post</h6>
      <div className="mb-4">
        <Textbox
          placeholder="Enter Title"
          onChange={onChangeTextboxHandler}
          value={textboxValue}
          error={submitError}
        />
      </div>

      <div className="mb-2">
        <Textarea
          placeholder="Add Description"
          onChange={onChangeTextareaHandler}
          value={textareaValue}
          error={submitError}
        />
      </div>

      <div className="flex flex-row justify-between">
        <Button variant="secondary" onClick={onCloseModal}>
          Cancel
        </Button>

        <Button onClick={onSubmitHandler} variant="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Addpost;
