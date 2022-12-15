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
                    <Modal.Title>Add a Sacco</Modal.Title>
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
                                placeholder=" Secondary Terminus"
                            />
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
                            <input
                                style={{ marginBottom: "10px" }}
                                name="code"
                                type="text"
                                placeholder=" Code"
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="region"
                                type="text"
                                placeholder=" Region"
                            />
                            <input
                                style={{ marginBottom: "10px" }}
                                name="maxFare"
                                type="text"
                                placeholder="Maximum Fare"
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

export default Add;
