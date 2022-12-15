import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Add from "./Add";
import Edit from "./Edit";
import { IoMdAdd } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { Button } from "../../components/Button/Button";

const Operator = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const TableRow = ({ data, buttons, active }) => {
        return (
            <tr>
                {data.map((item) => {
                    return <td key={item}>{item}</td>;
                })}
                <td key="active">{active}</td>
                <td key="button">{buttons}</td>
            </tr>
        );
    };
    const TableHead = ({ item }) => {
        return <td title={item}>{item}</td>;
    };
    const thData = [
        "ID Number",
        "First Name",
        "Middle Name ",
        "Last Name ",
        " email ",
        " IS Active ",
        "Actions",
    ];
    const tbData = [
        {
            id: "1",
            items: ["45555677", "Jonh", "Doe", "Jane", "johndoe@gmail.com"],
        },
        {
            id: "2",
            items: ["45555677", "Jonh", "Doe", "Jane", "johndoe@gmail.com"],
        },
        {
            id: "3",
            items: ["45555677", "Jonh", "Doe", "Jane", "johndoe@gmail.com"],
        },
    ];
    return (
        <>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {thData.map((h) => {
                                return <TableHead key={h} item={h} />;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tbData.map((item, id) => {
                            return (
                                <TableRow
                                    key={id}
                                    data={item.items}
                                    active={
                                        <div
                                            style={{ float: "left" }}
                                            className="form-check form-switch"
                                        >
                                            <input
                                                className={"form-check-input  "}
                                                type="checkbox"
                                                role="switch"
                                                id={id}
                                            />
                                        </div>
                                    }
                                    buttons={
                                        <div style={{ display: "flex" }}>
                                            <Button
                                                id={item.id}
                                                type="button"
                                                children={
                                                    <div>
                                                        <IoMdAdd />
                                                    </div>
                                                }
                                                buttonType="outline"
                                                button="primary"
                                                onClick={(e) =>
                                                    setShowModal(true)
                                                }
                                            />
                                            <Button
                                                id={item.id}
                                                type="button"
                                                children={
                                                    <div>
                                                        <RiEdit2Fill />
                                                    </div>
                                                }
                                                buttonType="outline"
                                                button="primary"
                                                onClick={(e) =>
                                                    setShowEditModal(true)
                                                }
                                            />
                                        </div>
                                    }
                                />
                            );
                        })}
                    </tbody>
                </Table>
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

export default Operator;
