"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    // Close the menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    
    // const currentPath = usePathname();



       
    return (
        <nav className={`bg-primary shadow-[0px_6px_10px_0px_rgba(23,19,63,0.25)] transition-all duration-200 max-w-[90rem] w-full fixed h-24 top-0 px-12 z-20 pb-4 flex items-center justify-between`}>
            <div className="w-[80px] h-[80px] relative ">
                <Image src={"/logo-blue.svg"} className="py-2" fill alt="sorbon-logo" />
            </div>

            {/* Desktop Menu */}
            <ul className="gap-6 sm:hidden hidden lg:flex md:hidden">
                {navLinks.map((ele) => {
                    const isActive = pathname === ele.link;
                    return (
                        <li
                            key={ele.title}
                            className={`text-secondary hover:border-secondary text-sm hover:border-b-2  transition-all duration-200  ${isActive ? `border-b-2  border-secondary  font-bold` : "font-medium"
                                }`}
                        >
                            <Link href={ele.link}>{ele.title}</Link>
                        </li>
                    );
                })}
            </ul>

            {/* Mobile Menu */}
            {open && (
                <ul ref={menuRef} className="absolute top-[6rem] left-0 flex flex-col items-center bg-primary p-3 w-full gap-4 lg:hidden md:flex">
                    {navLinks.map((ele) => {
                        const isActive = pathname === ele.link;
                        return (
                            <li
                                key={ele.title}
                                className={`text-lg w-fit hover:border-b-2 hover:border-secondary transition-all duration-200 text-secondary ${isActive ? "border-b-2 border-secondary font-bold" : "font-medium"
                                    }`}
                                onClick={() => setOpen(false)} // Close menu when clicking a link
                            >
                                <Link href={ele.link}>{ele.title}</Link>
                            </li>
                        );
                    })}
                    <button className=" text-center w-40 text-sm font-normal cursor-pointer border-2 p-3 rounded-lg border-secondary">
                        الدورات بالعربية
                    </button>
                </ul>
            )}

            {/* Buttons */}
            <div className="flex gap-2 items-center">
                <button className={`text-secondary border-secondary sm:hidden hidden md:hidden justify-center lg:flex items-center w-40 text-sm font-normal cursor-pointer border-2 p-3  rounded-lg `}>
                    الدورات بالعربية
                </button>
                <button onClick={() => setOpen(!open)} className="sm:flex flex md:flex lg:hidden flex-col gap-2 w-8">
                    <span className={`bg-secondary block w-full h-1`}></span>
                    <span className={`bg-secondary block w-full h-1`}></span>
                    <span className={`bg-secondary block w-full h-1`}></span>
                     
                </button>
            </div>
        </nav>
    );
}

