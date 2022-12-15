import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

const Add = ({ showModal, setShowModal }) => {
    const handleClose = () => {
        setShowModal(false);
    };
    const Roles = [
        { value: "Owner", label: "Owner" },
        { value: "Driver", label: "Driver" },
        { value: "Conductor", label: "Conductor" },
    ];
    return (
        <>
            <Modal show={showModal} toggler={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Add an Operator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ float: "left" }}>
                        {" "}
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
                        />
                    </div>{" "}
                    <div style={{ float: "right" }}>
                        {" "}
                        <input
                            style={{ marginBottom: "10px" }}
                            name="accoutNumber"
                            type="text"
                            placeholder="Account Number"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="bankName"
                            type="text"
                            placeholder="Bank Name "
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="bankBranch"
                            type="text"
                            placeholder="Bank Brunch"
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            name="bankCode"
                            type="text"
                            placeholder="Bank Code"
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

export default Add;
