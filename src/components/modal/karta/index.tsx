"use client";
import React, { memo, useState } from "react";
import { Modal, styled, TextField } from "@mui/material";
import { MessageModal } from "@/components";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { kartaPropsType } from "@types";

interface KartaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Index: React.FC<KartaModalProps> = ({ open, setOpen }) => {
  const [visible, setVisible] = useState(false);

  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#F8B400",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F8B400",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FBD029",
      },
      "&:hover fieldset": {
        borderColor: "#FBD029",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F8B400",
      },
    },
  });

  

  const initialValues: kartaPropsType = {
    number: "",
    cardDate: "",
  };

  const handleSubmit = (values: kartaPropsType) => {
    setVisible(open);
  };

  return (
    <>
      <MessageModal visible={visible} onClose={() => setVisible(false)} />
      <div className="flex justify-center items-center">
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-[504px] w-full rounded-[8px] bg-white px-8 pt-[45px] pb-4 shadow-lg">
              <h3 className="text-[20px] font-bold">
                С вашего карты будет списано сумма:
              </h3>
              <h4 className="text-[24px] font-bold">
                250 000 <span className="text-[16px] font-normal">uzs</span>
              </h4>
              <h3 className="text-[20px] font-bold mt-[50px] mb-4">
                Ваши карта данные
              </h3>

              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                <Form>
                  <p className="mb-2">Номер карты</p>
                  <Field
                    fullWidth
                    id="cardNumber"
                    type="text"
                    name="number"
                    label="1234 5678 9012 3456"
                    as={CustomTextField}
                    variant="outlined"
                    inputProps={{ maxLength: 19 }}
                  />
                  <ErrorMessage
                    name="number"
                    component="p"
                    className="text-[red] text-[15px]"
                  />

                  <p className="mb-2">Срок карты</p>
                  <Field
                    id="cardExpiry"
                    label="MM/YY"
                    name="cardDate"
                    as={CustomTextField}
                    variant="outlined"
                    inputProps={{ maxLength: 4 }}
                  />
                  <ErrorMessage
                    name="cardDate"
                    component="p"
                   
                    className="text-[red] text-[15px]"
                  />

                  <button
                    className="py-[20px] w-full my-[30px] bg-[#FBD029] rounded-[5px] text-[20px] font-bold"
                    type="submit"
                  >
                    Оплатить
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default memo(Index);
