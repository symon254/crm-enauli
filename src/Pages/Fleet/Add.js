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
                    <Modal.Title>Add a vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        style={{ marginBottom: "10px" }}
                        name="plateNumber"
                        type="text"
                        placeholder="Plate Number"
                    />
                    <input
                        style={{ marginBottom: "10px" }}
                        name="seatingCapacity"
                        type="text"
                        placeholder="Seating Capacity"
                    />
                    <input
                        style={{ marginBottom: "10px" }}
                        name="fleetNumber"
                        type="text"
                        placeholder="Fleet Number"
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
