import './App.css';
import React from 'react';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleShowModalWindow = () => {
    this.setState({ show: true });
  };

  handleHideModalWindow = () => {
    this.setState({ show: false });
  };

  render() {
    const modal = this.state.show && (
      <Modal hideModalWindow={this.handleHideModalWindow} />
    );

    return (
      <div className="App">
        {modal}
        <button className="App-btn" onClick={this.handleShowModalWindow}>
          Afficher le modal
        </button>
      </div>
    );
  }
}

export default App;
