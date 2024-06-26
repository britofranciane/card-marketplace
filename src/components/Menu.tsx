import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineSwap,
  AiOutlineUser,
  AiFillAlipaySquare,
} from 'react-icons/ai';

const Menu = () => {
  const dataMenu = [
    {
      label: 'Home',
      to: '/',
      icon: <AiOutlineHome />,
    },
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: <AiFillAlipaySquare />,
    },
    {
      label: 'My Cards',
      to: '/my-cards',
      icon: <AiOutlineUnorderedList />,
    },
    {
      label: 'My Trades',
      to: '/my-trades',
      icon: <AiOutlineSwap />,
    },
    {
      label: 'Profile',
      to: '/profile',
      icon: <AiOutlineUser />,
    },
  ];

  return (
    <menu
      className="bg-[#121217] text-white h-full w-full max-w-[350px] border-box relative"
      style={{ height: 'calc(100vh - 65px)' }}
    >
      <div className="border-b border-gray-700"></div>
      <nav className="mt-6">
        {dataMenu.map((item, i) => (
          <Link
            to={item.to}
            className="flex items-center py-2 px-4 text-lg hover:bg-gray-700"
            key={i}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </menu>
  );
};

export default Menu;
