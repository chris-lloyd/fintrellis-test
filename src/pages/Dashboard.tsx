import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPostCard from "../components/BlogPostCard";
import { userData } from "../store/user/userSlice";
import { postsData, getPosts } from "../store/posts/postSlice";
import useFetch from "../hooks/useFetch";
import { api } from "../config";
import Modal from "../components/Modal";
import DeletePost from "../components/DeletePost";

const Dashboard = () => {
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [cardId, setCardId] = React.useState("");
  const user = useSelector(userData);
  const posts = useSelector(postsData);
  const { data, loading } = useFetch(api.posts, { method: "GET" });
  const dispatch = useDispatch<any>();

  const onDeletePostCardHandler = async (id: string) => {
    setIsOpenDelete((preVal) => !preVal);
    setCardId(id);
  };

  const onClose = () => setIsOpenDelete((preVal) => !preVal);

  React.useEffect(() => {
    if (!loading) {
      dispatch(getPosts(data));
    }
  }, [loading]);

  return (
    <>
      <div className="flex flex-col w-full">
        {posts.map((postItem, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-row w-full justify-center">
                <BlogPostCard
                  title={postItem.title}
                  author={user.name}
                  description={postItem.description}
                  onDelete={() => onDeletePostCardHandler(postItem.id)}
                  id={postItem.id}
                />
              </div>
            </React.Fragment>
          );
        })}
        <Modal
          isOpen={isOpenDelete}
          children={<DeletePost onCloseModal={onClose} cardId={cardId}/>}
          onClose={() => onClose()}
        />
      </div>
    </>
  );
};

export default Dashboard;
