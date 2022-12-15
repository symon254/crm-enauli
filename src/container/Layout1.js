import React, { Suspense } from "react";
import SideBar from "../components/Navbar/Navsidebar";
import { motion } from "framer-motion";

const Layout = ({ pageRoute, keyIndex }) => {
    return (
        <div className="themeBackground themeText flex h-screen">
            <SideBar />

            <div
                className={`flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden px-7 py-4`}
            >
                <motion.div
                    className="mt-6 flex w-full flex-col"
                    initial="initial"
                    animate="animate"
                    key={keyIndex}
                    variants={{
                        initial: {
                            opacity: 0,
                        },
                        animate: {
                            opacity: 1,
                        },
                    }}
                >
                    <Suspense fallback="Loading...">{pageRoute}</Suspense>
                </motion.div>
            </div>
        </div>
    );
};

export default Layout;
