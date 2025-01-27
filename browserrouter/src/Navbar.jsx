import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/services"> Services</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
/*
We avoid using anchor tag <a/> because it refreshes the pages again again 
to avoid this we use Link instead
*/