import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/Navbar/Navsidebar";
import screens from "../Routes";
const layout = () => {
    return (
        <>
            <SideBar />
            <div className="content-wrapper">
                <div className="container mt-5 mb-3">
                    <Routes>
                        {screens.map((item, i) => {
                            return item.component ? (
                                <Route
                                    exact
                                    key={i}
                                    path={item.path}
                                    element={
                                        <Suspense fallback="Loading...">
                                            <item.component />
                                        </Suspense>
                                    }
                                />
                            ) : (
                                "null"
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default layout;
