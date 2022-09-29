import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about" style={{ marginLeft: "3rem" }}>
        About
      </Link>
    </div>
  );
};

export default Navbar;

