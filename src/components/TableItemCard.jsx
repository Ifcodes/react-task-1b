import React, { useRef } from "react";
import ArrowUpIcon from "../utils/ArrowUpIcon";
import { useDrag, useDrop } from "react-dnd";

const TableItemCard = ({
  number,
  photo,
  title,
  authorImgLink,
  username,
  like,
  index,
  moveListItem,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [spec, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  return (
    <div
      ref={dragDropRef}
      className={`${
        isDragging ? " opacity-0" : " opacity-100"
      } w-full py-3 border border-[rgba(255, 255, 255, 0.12)] rounded-[1rem] grid grid-cols-[50%_1fr_1fr] items-center cursor-move mt-6`}
    >
      <div className="flex pl-4">
        <span className="text-[#666666] font-[100]">{number}</span>
        <div className="ml-8 flex items-center">
          <img
            src={photo}
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
        <span className="text-base text-[#DBFD51] font-[100]">{username}</span>
      </div>
      <div className="flex justify-end items-center pr-4">
        <span className="text-[20px] text-white font-[100] mr-2">{like}</span>
        <ArrowUpIcon />
      </div>
    </div>
  );
};

export default TableItemCard;


