import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-white bg-[#121217] rounded-lg w-1/2 p-8">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">{title || ''}</h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
