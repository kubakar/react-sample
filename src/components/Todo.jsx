import css from "./Todo.module.css";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import { useState } from "react";
import PropTypes from "prop-types";

function Todo(props) {
  // 'useState' always returns 2 elements : current state & handler function
  // component becomes stateful now
  const [_modalIsOpen, _setModal] = useState(false); // react hook with initial value (used only in a component)

  // aux. functions
  const deleteModalHandler = function (num) {
    console.log(`Clicked - ${props.text}`);
    _setModal(true); // change state
  };

  const clickHandler = props.clickHandler || deleteModalHandler;
  const btnCaption = props.btnCaption || "Delete";

  const closeModal = function (num) {
    _setModal(false); // change state
  };

  const _id = props.newId; // property

  // "props" is a  component parameter object
  // {} - dynamic acccess
  return (
    <div className={css.card} id={_id}>
      <h2>{props.text}</h2>
      <div className="action">
        <button className={css.btn} onClick={clickHandler}>
          {btnCaption}
        </button>
      </div>
      {_modalIsOpen // conditional rendering
        ? // use react "Portal" to host JSX in different root -> see "index.html"
          ReactDOM.createPortal(
            <Modal
              onCancel={closeModal} // pass 'closeModal' callback to the component
              onConfirm={() => {
                document.getElementById(`${_id}`).remove();
                // console.log(_id);
                closeModal();
                // +++
                props.onAction((prevState) => ({
                  ...prevState,
                  trigger: true,
                }));
              }}
            />,
            document.getElementById("modal-root") // in "index.html"
          )
        : null}
      {/* default 'onClick' does not exist on custom (own) component */}
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired, // picked up by Story book
  btnCaption: PropTypes.string, // picked up by Story book
};

export default Todo; // custom components start with capital letter
