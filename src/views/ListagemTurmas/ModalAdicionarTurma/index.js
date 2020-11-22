import React, { useState } from "react";
import CustomModal from "../../../components/CustomModal";

const ModalAdicionarTurma = (props) => {
  const [ contador, setContador ] = useState(0);

  return (
    <CustomModal
      onClose={props.onClose}
      name={"Cadastrar turma"}
      height={"500px"}
      width={"500px"}
    >
      <button onClick={() => setContador(prev => prev + 1)} >
        { contador }
      </button>
    </CustomModal>
  );
};

export default ModalAdicionarTurma;
