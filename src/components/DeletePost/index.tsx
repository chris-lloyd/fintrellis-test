import React from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import {  deletePostAsync } from "../../store/posts/postSlice";
import { toast } from "sonner";

type deletePostType = {
  onCloseModal: () => void;
  cardId: string;
};

const DeletePost = ({ onCloseModal, cardId }: deletePostType) => {
  const dispatch = useDispatch<any>();
  const onSubmitHandler = async () => {
    await dispatch(deletePostAsync({ id: cardId }));
    toast.success("Post removed successfully");
    onCloseModal();
  };

  return (
    <div className="flex flex-col">
      <h6 className="font-bold mb-24">
        Are you sure you want to delete this post ?
      </h6>
      <div className="flex flex-row justify-around">
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

export default DeletePost;
