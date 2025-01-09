import * as React from "react";
import { CgClose } from "react-icons/cg";

export interface ModalProps {
    thumbnail: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ thumbnail, onClose }) => {
    return (
        <div className="  z-10">
            <div className="overlay absolute top-0 left-0 w-full h-screen bg-black opacity-40 z-[-1]"></div>
            <div className="">
                <button
                    className="
                bg-[#e23965] flex flex-col items-center justify-center absolute right-[13%] top-[50px]  rounded-2xl text-white hover:bg-red-400 duration-300 ease-linear w-[40px] h-[40px] mx-auto shadow-lg
                "
                    onClick={onClose}
                >
                    <CgClose />
                </button>
                <img src={thumbnail} className=" w-[1200px] h-[700px] rounded-lg  mb-4 " />
            </div>
        </div>
    );
};

export default Modal;
