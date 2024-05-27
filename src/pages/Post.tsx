import * as React from "react";
import {
  onePostData,
  getOnePostAsync,
  postItemType,
} from "../store/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { userData } from "../store/user/userSlice";

const Post = () => {
  const imageUrl =
    "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png";
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector(userData);
  const dispatch = useDispatch<any>();
  const moreDetailData: postItemType = useSelector(onePostData);

  const getOnePostData = async () => {
    id && (await dispatch(getOnePostAsync({ id })));
  };

  const getDateNow = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  React.useEffect(() => {
    id && getOnePostData();
  }, [id]);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 bg-slate-300 rounded-lg shadow-md relative ">
        <div className="flex flex-row w-full">
          <Button
            onClick={() => navigate(-1)}
            className="absolute mt-2 left-6 opacity-70  bg-slate-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-slate-700 focus:outline-none"
          >
            {"<- Back"}
          </Button>
        </div>

        <img className="w-full" src={imageUrl} alt={moreDetailData?.title} />
        <div className="font-bold text-xl mb-2">{moreDetailData?.title}</div>
        <p className="text-gray-700 text-base leading-relaxed">
          {moreDetailData?.description}
        </p>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            {user.name}
          </span>
          <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {getDateNow()}
          </span>
        </div>
      </div>
    </>
  );
};

export default Post;
