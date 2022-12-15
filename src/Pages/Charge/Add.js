import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

const Add = ({ showModal, setShowModal }) => {
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal show={showModal} toggler={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Add Charge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        style={{ marginBottom: "10px" }}
                        name="saccoId"
                        type="text"
                        placeholder="Sacco ID"
                    />
                    <input
                        style={{ marginBottom: "10px" }}
                        name="charge"
                        type="text"
                        placeholder="Charge"
                    />
                    <input
                        style={{ marginBottom: "10px" }}
                        name="isPercentage"
                        type="text"
                        placeholder="Percentage"
                    />{" "}
                    <input
                        style={{ marginBottom: "10px" }}
                        name="amount"
                        type="text"
                        placeholder="Amount"
                    />{" "}
                    <input
                        style={{ marginBottom: "10px" }}
                        name="frequency"
                        type="text"
                        placeholder="Frequency"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Add;
