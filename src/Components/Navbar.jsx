import React from "react";
import { Link } from "react-router-dom";
import SupplierTable from './SupplierTable';
import '../index.css';
import {
    Collapse,
    Dropdown,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Collapse, Dropdown });

function Navbar() {
    return (    
        <div className="ml-2 mr-2">
        <nav className=" flex-no-wrap relative flex w-full items-center justify-between 
        bg-gradient-to-r from-buttons to-blueBar p-4 rounded-3xl py-2 mt-2 
        sm:ml-24sm:mr-4

        lg:flex-wrap lg:justify-center lg:py-4"
        data-twe-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContent1"
                data-twe-rippe-init
                data-twe-ripple-color="light"
                aria-expanded="false"
                aria-controls="navbarSupportedContent1"
                aria-label="Toggle navigation">
                <span className="[&>svg]:w-7">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7">
                    <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd" />
                </svg>
                </span>
            </button>
            <div 
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1"
              data-twe-collapse-item>
            <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                data-twe-navbar-nav-ref>
                <li className="mb-4 lg:mb-0 lg:pe-2 " data-twe-nav-item-ref>
                    <Link to="/" className="text-white hover:text-purple-300">Inicio</Link>
                </li>
                <li>
                    <Link to="/SupplierTable" className="text-white hover:text-purple-300">Suppliers</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</div>
);
}

export default Navbar;