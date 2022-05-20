import { Component } from "react";

// // functional component
// function Modal(props) {
//   const cancelHandler = () => props.onCancel();
//   const confirmHandler = () => props.onConfirm();

//   // 'props' handlers are passesd to valid html elements
//   return (
//     <div className="backdrop">
//       <div className="modal">
//         <p>Are you sure?</p>
//         <button className="btn btn--alt" onClick={cancelHandler}>
//           Cancel
//         </button>
//         <button className="btn" onClick={confirmHandler}>
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// }

// alternative - react class component
class Modal extends Component {
  // lifecycle method
  componentDidMount() {
    console.log("Modal did mount"); // executes twice
    // "If you perform any type of IF conditional rendering, it may force component to unmount and re-mount.""
  }

  cancelHandler = () => this.props.onCancel();
  confirmHandler = () => this.props.onConfirm();

  render() {
    // 'props' handlers are passesd to valid html elements
    return (
      <div className="backdrop">
        <div className="modal">
          <p>Are you sure?</p>
          <button className="btn btn--alt" onClick={this.cancelHandler}>
            Cancel
          </button>
          <button className="btn" onClick={this.confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
