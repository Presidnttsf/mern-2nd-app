import React from "react";

// Modal component to display messages and confirmation dialogs
function Modal({ show, handleClose, title, modalMessage, confirmAction }) {
  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`} // Conditionally apply Bootstrap modal classes
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }} // Adds a semi-transparent background
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5> {/* Display modal title */}
            <button type="button" className="btn-close" onClick={handleClose}></button> {/* Close button */}
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p>{modalMessage}</p> {/* Display modal message */}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            {/* Show Yes/No buttons ONLY when confirming an action */}
            {confirmAction ? (
              <>
                <button type="button" className="btn btn-danger" onClick={confirmAction}> {/* Confirm button */}
                  Yes
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClose}> {/* Cancel button */}
                  No
                </button>
              </>
            ) : (
              <button type="button" className="btn btn-secondary" onClick={handleClose}> {/* Close button for non-confirmation messages */}
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
