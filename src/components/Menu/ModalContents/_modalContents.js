import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { StyledModalContents } from './_style';


const ModalContents = ({
  image,
  name,
}) => {

  useEffect(
    () => {

    },
    [],
  );
  return (
    <>

      <StyledModalContents>
        <img src={image} alt={`${name} 사진`} />
        <div className="desc">
          <h1>name</h1>
          <p>모둠사시미스시 / 계절요리 / 계절구이 / 계절튀김</p>
        </div>
      </StyledModalContents>
    </>
  );
};

export default withRouter(ModalContents);

