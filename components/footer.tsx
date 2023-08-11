import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 Mamá Canguro, SAC. All rights reserved.
        </p>
      </div>
      <div className="text-center text-white bg-gray-600 py-2">
        This page was develop by: &nbsp;
        <Link
          href="https://github.com/fredsalv01"
          target="_blank"
          className="underline font-semibold"
        >
          SalvedyDev
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
