import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormModal from './FormModal';

const ModalExp = (props) => {
  const {
    buttonLabel,
    className,
    id
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {id == null ? <i className="fas fa-plus fa-lg float-right mr-4 edit-icon" onClick={toggle}></i> : <i className="fas fa-pen fa-lg float-right mr-4 edit-icon" onClick={toggle}></i>}
     <Modal id={id} size="lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Experience</ModalHeader>
        <ModalBody>
         <FormModal id={id}/>
        </ModalBody>
        <ModalFooter>
          <button className="add-profile-btn" onClick={toggle}>Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExp;

