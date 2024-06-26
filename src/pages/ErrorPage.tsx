import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111118] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1 ">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"></div>
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Oops! Something went wrong
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              We're sorry, but it appears there was an error. please, try again
              later.
            </p>
            <div className="flex px-4 py-3 justify-center items-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#292938] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <Link to={'/'} className="truncate">
                  Voltar
                </Link>
              </button>
            </div>
            <div className="flex px-4 py-3 justify-center items-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1919e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <Link to={'/'} className="truncate">
                  Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
