import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

const AddStation = ({ showStationModal, setShowStationModal }) => {
    const handleClose = () => {
        setShowStationModal(false);
    };

    return (
        <>
            <Modal show={showStationModal} toggler={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Add a Station</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div>
                            <input
                                style={{ marginBottom: "10px" }}
                                name="saccoId"
                                type="text"
                                placeholder="Sacco ID"
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                    </>
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

export default AddStation;
