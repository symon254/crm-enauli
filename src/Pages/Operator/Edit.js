import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

const Edit = ({ showEditModal, setShowEditModal }) => {
    const handleClose = () => {
        setShowEditModal(false);
    };
    const Roles = [
        { value: "Owner", label: "Owner" },
        { value: "Driver", label: "Driver" },
        { value: "Conductor", label: "Conductor" },
    ];

    return (
        <>
            <Modal show={showEditModal} toggler={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Edit an Operator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <select
                            style={{
                                padding: "10px",
                                width: "100%",
                                marginRadius: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {Roles.map(({ index, label }) => (
                                <option key={index}>{label}</option>
                            ))}
                        </select>
                        <input
                            style={{ marginBottom: "10px" }}
                            name="vehicleId"
                            type="text"
                            placeholder="Vehicle Id"
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
