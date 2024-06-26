import React from 'react';
import { FaSearch } from 'react-icons/fa';
import TradeList from './TradeList';
import Title from '@components/Title';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden w-full flex-col pt-10 pb-20 ">
      <div className="px-8">
        <Title text={'Trade requests'} />
        <p className="text-[#9E9EB8] max-w-[700px]">
          These are requests to exchange other collectors. You can send a
          counterproposal or accept the request as it is.
        </p>
        <div className="flex w-full items-stretch rounded-xl h-12 my-4">
          <div className="text-[#9d9db8] flex border-none bg-[#292938] items-center justify-center pl-4 rounded-l-xl border-r-0">
            <FaSearch size={24} />
          </div>
          <input
            placeholder="Search"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#292938] focus:border-none h-full placeholder:text-[#9d9db8] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            value=""
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto w-full p-8 pt-4">
        <section className="mb-8 flex h-screen w-full">
          <TradeList />
        </section>
      </div>
    </div>
  );
};

export default Home;
