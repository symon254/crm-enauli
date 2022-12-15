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
                    <Modal.Title>Edit an Official</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ float: "left" }}>
                        {" "}
                        <input
                            style={{ marginBottom: "10px" }}
                            name="firstName"
                            type="text"
                            placeholder="First Name "
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="middleName"
                            type="text"
                            placeholder="Middle Name"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                        />{" "}
                        <input
                            style={{ marginBottom: "10px" }}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>{" "}
                    <div style={{ float: "right" }}>
                        {" "}
                        <input
                            style={{ marginBottom: "10px" }}
                            name="saccoId"
                            type="text"
                            placeholder="sacco ID"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="saccoStationId"
                            type="text"
                            placeholder="Sacco Station ID "
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="designation"
                            type="text"
                            placeholder="Designation"
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
                            <label>Activate</label>
                        </div>
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
