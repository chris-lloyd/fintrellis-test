import React from "react";
import {useNavigate} from 'react-router-dom'

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  author: string;
  date?: string;
  onDelete?: () => void | Promise<void>;
  id:string
}

const getDateNow = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  imageUrl = "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png",
  author,
  date = getDateNow(),
  onDelete,
  id
}) => {
  const words = description.split(" ");
  const navigate = useNavigate();

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <button
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-100"
        onClick={onDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rounded bg-red-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {`${words.slice(0, 100).join(" ")}${words.length > 100 ? "..." : ""}`}
          {words.length > 100 && (
            <button
              className="text-blue-500 hover:text-blue-700 ml-1"
              onClick={() => navigate(`post/${id}`)}
            >
              Read More
            </button>
          )}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
          {author}
        </span>
        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {date}
        </span>
      </div>
    </div>
  );
};

export default BlogPostCard;
