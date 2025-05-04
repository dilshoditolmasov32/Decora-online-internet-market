"use client";
import React, { useState, useRef, memo } from "react";
import { SuccessModal } from "@/components";
import { Modal } from "@mui/material";

interface MessageModalProps {
  visible: boolean;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ visible, onClose }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [open, setOpen]=useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value.slice(0, 1);
    setCode(newCode);

    if (e.target.value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !code[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
   <>
   <SuccessModal open={open} setOpen={setOpen}/>
   <Modal open={visible} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="max-w-[504px] w-full rounded-[8px] bg-white px-8 pt-[45px] pb-4">
          <h3 className="text-[20px] text-center">
            Введите код отправленный на <br /> номер
            <span className="font-bold"> +998 99 9** **56</span>
          </h3>
          <div className="flex gap-4 justify-center my-[30px]">
            {code.map((value, index) => (
              <div
                key={index}
                className="rounded-[5px] bg-[#f2f2f2] w-[60px] pb-[15px] pt-[15px] px-[12px] relative"
              >
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none w-full h-[30px] bg-[#F2F2F2] text-[20px] text-center"
                  maxLength={1}
                />
                <p className="absolute mb-4 w-9 bg-black opacity-70 h-[2px]"></p>
              </div>
            ))}
          </div>
          <p className="text-[#FBD029] text-center my-2">Не полусили код ?</p>
          <button
            className="py-[20px] w-full my-[60px] bg-[#FBD029] rounded-[5px] text-[20px]"
            type="button"
            onClick={handleClick}
          >
            Подвердить
          </button>
        </div>
      </div>
    </Modal>
   </>
  );
};

export default memo(MessageModal);
