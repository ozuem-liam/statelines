import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ show, handleClose, subject, content }) {
  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            width: "300px",
            height: "200px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            zIndex: "9999",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>{subject}</h3>
            <button style={{ color: "red" }} onClick={handleClose}>
              x
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>{content}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalComponent;
