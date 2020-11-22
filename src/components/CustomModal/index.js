import React from "react";
import { 
  ContainerModal, Modal,
  ContainerChildren, HeaderModal,
  HeaderText, CloseIcon, BodyModal
} from "./index.styled";
import IconClose from "../../assets/icons/icon-close.svg";

const CustomModal = (props) => {
  const closeModal = () => {
    props.onClose && props.onClose();
  };

  return (
    <ContainerModal>
      <Modal>
        <ContainerChildren
          height={props.height}
          width={props.width}
        >
          <HeaderModal>
            <HeaderText>
              { props.name }
            </HeaderText>
            <CloseIcon
              alt={"CloseIcon"}
              src={IconClose}
              onClick={closeModal}
            />
          </HeaderModal>
          <BodyModal>
            { props.children }
          </BodyModal>
        </ContainerChildren>
      </Modal>
    </ContainerModal>
  );
};

export default CustomModal;
