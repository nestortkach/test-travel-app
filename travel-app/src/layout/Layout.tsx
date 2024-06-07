import React, { ReactNode } from "react";
import Header from "../components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <div className="max-w-[900px] w-full">
        <Header />
        <main className="px-8 space-y-7">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
