import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../authContext";
import TableItemCard from "../components/TableItemCard";
import ArrowVector from "../utils/ArrowVector";
import MkdSDK from "../utils/MkdSDK";
import UserIcon from "../utils/UserIcon";

const demoData = [
  {
    imgUrl: "../utils/Rectangle1534.png",
    title: "Rune raises $100,000 for marketing through NFT butterflies sale",
    authorImgLink: "",
    authorName: "ninjanft",
    numberOfLikes: "254",
  },
  {
    imgLink: "../utils/Rectangle1534.png",
    title: "Rune raises $100,000 for marketing through NFT butterflies sale",
    authorImgLink: "",
    authorName: "ninjanft",
    numberOfLikes: "254",
  },
  {
    imgLink: "../utils/Rectangle1534.png",
    title: "Rune raises $100,000 for marketing through NFT butterflies sale",
    authorImgLink: "",
    authorName: "ninjanft",
    numberOfLikes: "254",
  },
  {
    imgLink: "../utils/Rectangle1534.png",
    title: "Rune raises $100,000 for marketing through NFT butterflies sale",
    authorImgLink: "",
    authorName: "ninjanft",
    numberOfLikes: "254",
  },
];

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState();
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    dispatch({ type: "LOGOUT" });
  };

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = items[dragIndex];
      const hoverItem = items[hoverIndex];
      // Swap places of dragItem and hoverItem in the pets array
      setItems((items) => {
        const updatedItems = [...items];
        updatedItems[dragIndex] = hoverItem;
        updatedItems[hoverIndex] = dragItem;
        return updatedItems;
      });
    },
    [items]
  );

  const sdk = new MkdSDK();

  const getVideos = async () => {
    const data = {
      payload: {},
      page: currentPage,
      limit: pageLimit,
    };

    const response = await sdk.callRestAPI(data, "PAGINATE");
    setItems(response.list);
    console.log({ response });
  };

  useEffect(() => {
    console.log({ currentPage });
    getVideos();
  }, [currentPage]);

  return (
    <>
      <div className="w-full  overflow-hidden bg-[#111111] px-28 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-[3rem] text-white font-black">APP</h1>
          <button
            className=" w-max px-6 py-3 rounded-[40px] bg-[#9BFF00] border-none text-base text-[#050505] flex items-center font-[100]"
            onClick={() => logout()}
          >
            <UserIcon />
            <span className="ml-2">Logout</span>
          </button>
        </nav>
        <div className="flex justify-between items-center mt-28">
          <span className=" text-4xl font-[100] text-white">
            Today's leaderboard
          </span>
          <div className="w-[26.1rem] h-[3.5rem] py-5 px-6 bg-[#1D1D1D] rounded-2xl flex item-center justify-between">
            <span className="text-white font-[100] text-base">30 May 2022</span>
            <div className="flex h-full items-center">
              <div className="bg-[#696969] rounded-full border-[2px] h-[0] border-solid border-[#696969]"></div>
            </div>{" "}
            <div className="bg-[#9BFF00] py-3 px-2 flex items-center justify-center text-sm font-[100] rounded-lg">
              {" "}
              <span>Submissions Open</span>{" "}
            </div>
            <div className="flex h-full items-center">
              <div className="bg-[#696969] rounded-full border-[2px] h-[0] border-solid border-[#696969]"></div>
            </div>
            <span className="text-white font-[100] text-base">11:34</span>
          </div>
        </div>
        <div className="mt-8">
          <div className="w-full text-[#666666] text-base font-[100] grid grid-cols-[50%_1fr_1fr] items-end">
            <div className="pl-4">
              <span>#</span>
              <span className="ml-8">Title</span>
            </div>
            <div>
              <span>Author</span>
            </div>
            <div className="flex justify-end items-center pr-4">
              <span className="mr-2">Most Liked</span>
              <ArrowVector />
            </div>
          </div>
          <div>
            {items.length > 0 &&
              items.map((data, index) => (
                <TableItemCard
                  index={index}
                  moveListItem={moveListItem}
                  key={index}
                  number={index + 1}
                  {...data}
                />
              ))}
          </div>
        </div>
        <div className="flex justify-end items-center mt-4">
          <button
            className=" w-max px-6 py-3 rounded-[40px] bg-[#9BFF00] border-none text-base text-[#050505] flex items-center font-[100] mr-4"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <span className="ml-2">Preview</span>
          </button>
          <button
            className=" w-max px-6 py-3 rounded-[40px] bg-[#9BFF00] border-none text-base text-[#050505] flex items-center font-[100]"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span className="ml-2">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
