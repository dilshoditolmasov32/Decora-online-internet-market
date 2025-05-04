import { memo } from "react";
import { Modal } from "@mui/material";
import { Progress } from "antd";



interface KartaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Index:React.FC<KartaModalProps> = ({ open, setOpen }) => {
  return (
    <>
    <Modal open={open} onClose={()=>setOpen(false)}>
      <div className="container fixed inset-0 flex items-center justify-center">
        <div className="max-w-[375px] w-full rounded-[8px] text-center bg-white p-[20px]">
          <div>
            <Progress type="circle" percent={100} />
          </div>
          <p className="text-[#1F1D14] text-[24px] mt-[30px]  ">Успешно оплачено!</p>
          <button 
          className="rounded-[1000px] bg-[#FBD029] py-4 px-[50px] my-[34px] text-[16px] text-[#1F1D14]"
          onClick={() => setOpen(false)}
          >ОК</button>
        </div>
      </div>
      
    </Modal>
    </>
  );
};

export default memo(Index);
