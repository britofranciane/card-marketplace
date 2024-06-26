import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiMoreFill } from 'react-icons/ri';

interface Props {
  title?: string;
  imageUrl?: string;
  price?: string;
  edition?: string;
  onClick?: () => void;
}

const TradeCard: React.FC<Props> = ({
  title,
  imageUrl,
  price,
  edition,
  onClick,
}) => {
  return (
    <div className="flex gap-4 bg-[#111118] px-4 py-3 justify-between w-full">
      <div className="flex items-start gap-4">
        {imageUrl ? (
          <div
            className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-[70px] w-fit"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        ) : (
          <AiOutlineUser className="w-20 h-20 text-[#E5E8EB] mb-4" />
        )}
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-white text-base font-bold leading-normal">
            {title}
          </p>
          <p className="text-[#9d9db8] text-sm font-normal leading-normal">
            {price}
          </p>
          <p className="text-[#9d9db8] text-sm font-normal leading-normal">
            {edition}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="text-white flex size-7 items-center justify-center">
          <RiMoreFill size={24} onClick={onClick} className="cursor-pointer" />{' '}
        </div>
      </div>
    </div>
  );
};

export default TradeCard;
