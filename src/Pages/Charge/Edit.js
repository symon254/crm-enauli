import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

const Edit = ({ showEditModal, setShowEditModal }) => {
    const handleClose = () => {
        setShowEditModal(false);
    };

    return (
        <>
            <Modal show={showEditModal} toggler={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Edit Charge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input
                            style={{ marginBottom: "10px" }}
                            name="id"
                            type="text"
                            placeholder="ID Number"
                        />

                        <div
                            style={{ float: "left" }}
                            className="form-check form-switch"
                        >
                            <input
                                className={"form-check-input  "}
                                type="checkbox"
                                role="switch"
                            />
                        </div>
                    </div>{" "}
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

export default Edit;
