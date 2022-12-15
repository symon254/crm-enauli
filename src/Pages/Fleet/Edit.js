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
                    <Modal.Title>Edit a vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ float: "left" }}>
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
                    </div>{" "}
                    <div style={{ float: "right" }}>
                        <input
                            style={{ marginBottom: "10px" }}
                            name="route"
                            type="text"
                            placeholder="Route"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="primaryTerminus"
                            type="text"
                            placeholder="Primary Terminus"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="secondaryTerminus"
                            type="text"
                            placeholder="Secondary Terminus"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="routeId"
                            type="text"
                            placeholder="Route Id"
                        />
                    </div>
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
