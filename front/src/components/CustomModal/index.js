import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ContainerModal, Modal} from "./index.styled";

const CustomModal = forwardRef(({children}, ref) => {
  const [isVisible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => {
    return {
      openModal: () => openModal(),
      closeModal: () => closeModal()
    };
  });

  const renderModal = () => (
    <ContainerModal>
      <Modal>
        {children}
      </Modal>
    </ContainerModal>
  );

  if(isVisible) return renderModal();
  return <></>;
});

export default CustomModal;
