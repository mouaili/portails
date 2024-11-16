import { createPortal } from 'react-dom';
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    //Création  du modal window à la volée
    this.modalContainer = document.createElement('div');
    document.body.appendChild(this.modalContainer);
  }

  //Phase de démontage du modal window
  componentWillUnmount = () => {
    document.body.removeChild(this.modalContainer);
  };

  render() {
    return createPortal(
      <div className="modal" onClick={this.props.hideModalWindow}>
        <p>Je suis une fenêtre modal..</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi
          consequuntur culpa magni, illo ea magnam dicta natus ex debitis
          architecto amet? Ea, perferendis incidunt.
        </p>
        <button>Fermer</button>
      </div>,
      this.modalContainer // pour afficher le modal à la volée
    );
  }
}

export default Modal;
