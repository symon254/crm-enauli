import React, { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import { IoMdAdd } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { Button } from "../../components/Button/Button";

const Charge = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    return (
        <>
            <div className="wrapper" style={{ marginLeft: "400px" }}>
                <div className="cardss">
                    <div>
                        <img className="cardss__img" src="" alt="" />
                    </div>
                    <div className="cardss__body">
                        <h2 className="cardss__title">SACCO BALANCE</h2>
                        <p className="cardss__description">
                            Sacco ID: qrt21456rfs56
                        </p>
                        <h3 className="cardss__price">BALANCE: 6,000</h3>
                        <span>
                            <Button
                                type="button"
                                children={
                                    <div>
                                        <IoMdAdd />
                                    </div>
                                }
                                buttonType="outline"
                                button="primary"
                                onClick={(e) => setShowModal(true)}
                                style={{
                                    marginRight: "5px",
                                    float: "left",
                                }}
                            />
                            <Button
                                style={{ float: "left" }}
                                type="button"
                                children={
                                    <div>
                                        <RiEdit2Fill />
                                    </div>
                                }
                                buttonType="outline"
                                button="primary"
                                onClick={(e) => setShowEditModal(true)}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <>
                <Add showModal={showModal} setShowModal={setShowModal} />
                <Edit
                    showEditModal={showEditModal}
                    setShowEditModal={setShowEditModal}
                />
            </>
        </>
    );
};

export default Charge;
