import React from "react";
import ArrowUpIcon from "../utils/ArrowUpIcon";

const TableItemCard = ({
  number,
  imgUrl,
  title,
  authorImgLink,
  authorName,
  numberOfLikes,
}) => {
  return (
    <div className="w-full h-[6rem] border border-[rgba(255, 255, 255, 0.12)] rounded-[1rem] grid grid-cols-[50%_1fr_1fr] items-center cursor-move">
      <div className="flex pl-4">
        <span className="text-[#666666] font-[100]">{number}</span>
        <div className="ml-8 flex items-center">
          <img
            src={imgUrl}
            alt=""
            className="w-[7.3rem] h-[64px] rounded-lg mr-4"
          />
          <span className="text-[20px] text-white font-[100]">{title}</span>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={authorImgLink}
          alt=""
          className="w-[24px] h-[24px] rounded-full mr-4"
        />
        <span className="text-base text-[#DBFD51] font-[100]">
          {authorName}
        </span>
      </div>
      <div className="flex justify-end items-center pr-4">
        <span className="text-[20px] text-white font-[100] mr-2">
          {numberOfLikes}
        </span>
        <ArrowUpIcon />
      </div>
    </div>
  );
};

export default TableItemCard;
