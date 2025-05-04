"use client"
import React, { memo, useState } from 'react';
import { Button, Modal } from 'antd';

const Index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container'>
      <Button type="default" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} >
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47922.87429671023!2d69.3473509!3d41.3484489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1722151231397!5m2!1suz!2s" width="450" height="450" ></iframe>
      </Modal>
    </div>
  );
};

export default memo(Index);