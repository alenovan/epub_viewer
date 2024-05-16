/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";

interface IProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return <Box minH="100vh">{children}</Box>;
};

export default DashboardLayout;
