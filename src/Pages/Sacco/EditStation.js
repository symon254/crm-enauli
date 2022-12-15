import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

const EditStation = ({ showEditStationModal, setShowEditStationModal }) => {
    const handleClose = () => {
        setShowEditStationModal(false);
    };

    return (
        <>
            <Modal show={showEditStationModal} toggler={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Edit a Station</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div>
                            <input
                                style={{ marginBottom: "10px" }}
                                name="saccoStationId"
                                type="text"
                                placeholder="Sacco Station ID"
                            />
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
                        </div>
                        <div style={{ float: "left" }}>
                            <input
                                style={{ marginBottom: "10px" }}
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div style={{ float: "right" }}>
                            <div
                                style={{ marginLeft: "-50px" }}
                                className="form-check form-switch"
                            >
                                <input
                                    className={"form-check-input  "}
                                    type="checkbox"
                                    role="switch"
                                />
                            </div>
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

export default EditStation;
