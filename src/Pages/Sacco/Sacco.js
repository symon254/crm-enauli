import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Add from "./Add";
import AddStation from "./AddSation";
import EditStation from "./EditStation";
import Edit from "./Edit";
import { IoMdAdd } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { Button } from "../../components/Button/Button";

const Operator = () => {
    const [showModal, setShowModal] = useState(false);
    const [showStationModal, setShowStationModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showEditStationModal, setShowEditStationModal] = useState(false);
    const TableRow = ({ data, buttons, station }) => {
        return (
            <tr>
                {data.map((item) => {
                    return <td key={item}>{item}</td>;
                })}
                <td key="station">{station}</td>
                <td key="button">{buttons}</td>
            </tr>
        );
    };
    const TableHead = ({ item }) => {
        return <td title={item}>{item}</td>;
    };
    const thData = [
        "Sacco Name",
        "Address",
        "Region",
        "Primary Terminus",
        "Secondary Terminus",
        " TagLine ",
        "Station",
        "Actions",
    ];
    const tbData = [
        {
            id: "1",
            items: [
                "Orokise",
                "Rongai,1443",
                "Kajiado",
                "Ronagi",
                "Nairobi",
                "percel",
            ],
        },
        {
            id: "2",
            items: [
                "Orokise",
                "Rongai,1443",
                "Kajiado",
                "Ronagi",
                "Nairobi",
                "percel",
            ],
        },
        {
            id: "3",
            items: [
                "Orokise",
                "Rongai,1443",
                "Kajiado",
                "Ronagi",
                "Nairobi",
                "percel",
            ],
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
                                    station={
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
                                                    setShowStationModal(true)
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
                                                    setShowEditStationModal(
                                                        true
                                                    )
                                                }
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
                <AddStation
                    showStationModal={showStationModal}
                    setShowStationModal={setShowStationModal}
                />
                <EditStation
                    showEditStationModal={showEditStationModal}
                    setShowEditStationModal={setShowEditStationModal}
                />
                <Edit
                    showEditModal={showEditModal}
                    setShowEditModal={setShowEditModal}
                />
            </>
        </>
    );
};

export default Operator;
