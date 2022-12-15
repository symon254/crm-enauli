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
                    <Modal.Title>Edit a Sacco</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div>
                            <input
                                style={{ marginBottom: "10px" }}
                                name="contactPerson"
                                type="text"
                                placeholder="Contact Person "
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="contactNumber"
                                type="text"
                                placeholder="Contact Number"
                            />
                        </div>
                        <div style={{ float: "left" }}>
                            <input
                                style={{ marginBottom: "10px" }}
                                name="pin"
                                type="text"
                                placeholder="Pin "
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="senderId"
                                type="text"
                                placeholder="Sender ID"
                            />{" "}
                        </div>{" "}
                        <div style={{ float: "right" }}>
                            {" "}
                            <input
                                style={{ marginBottom: "10px" }}
                                name="address"
                                type="text"
                                placeholder="Address"
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="postalAddress"
                                type="text"
                                placeholder="Postal Address"
                            />
                        </div>
                        <div>
                            <input
                                style={{ marginBottom: "10px" }}
                                name="tagLine"
                                type="text"
                                placeholder="Tagline"
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

export default Edit;
