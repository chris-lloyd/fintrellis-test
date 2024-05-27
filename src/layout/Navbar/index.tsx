import React, { useState } from "react";
import Modal from "../../components/Modal";
import Addpost from "../../components/AddPost";

const Navbar: React.FC = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const onClose = ()=>setIsOpenAdd(preVal=>!preVal)

  return (
    <nav className="bg-gray-800 p-4 fixed w-full  z-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 text-white">Fintrellis</div>
          <div className="flex">
            <a
              onClick={onClose}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Post
            </a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenAdd}
        children={<Addpost onCloseModal={onClose}/>}
        onClose={() => onClose()}
      />
    </nav>
  );
};

export default Navbar;
