"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/navLinks";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null); // ⬅️ زر القائمة

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) // ⬅️ نضيف هذا الشرط
            ) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <nav className="bg-primary shadow-md fixed top-0 left-0 w-full z-40 px-6 py-3 flex justify-between items-center">
            {/* الشعار */}
            <div className="relative">
                <Image
                    src="/logo-blue.svg"
                    width={100}
                    height={80}
                    alt="sorbon-logo"
                    unoptimized
                />
            </div>

            {/* قائمة سطح المكتب */}
            <ul className="hidden lg:flex gap-6">
                {navLinks.map((ele) => {
                    const isActive = pathname === ele.link;
                    return (
                        <li
                            key={ele.title}
                            className={`text-secondary text-base border-b-2 transition-all duration-200 ${isActive
                                    ? "border-secondary font-bold"
                                    : "border-transparent font-medium"
                                }`}
                        >
                            <Link href={ele.link}>{ele.title}</Link>
                        </li>
                    );
                })}
            </ul>

            <button className="w-40 text-sm font-normal border-2 border-secondary p-2 rounded-lg text-secondary">
                الدورات بالعربية
            </button>

            {/* زر القائمة للموبايل */}
            <div className="lg:hidden flex items-center gap-4">
                <button
                    ref={buttonRef}
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex flex-col gap-1 w-7"
                    aria-label="toggle menu"
                >
                    <span className="bg-secondary h-1 w-full rounded"></span>
                    <span className="bg-secondary h-1 w-full rounded"></span>
                    <span className="bg-secondary h-1 w-full rounded"></span>
                </button>
            </div>

            {/* قائمة الموبايل */}
            {open && (
                <ul
                    ref={menuRef}
                    className="absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 p-6 lg:hidden z-[99] shadow-md"
                >
                    {navLinks.map((ele) => {
                        const isActive = pathname === ele.link;
                        return (
                            <li
                                key={ele.title}
                                className={`text-secondary text-base border-b-2 transition-all duration-200 ${isActive
                                        ? "border-secondary font-bold"
                                        : "border-transparent font-medium"
                                    }`}
                            >
                                <Link href={ele.link} onClick={() => setOpen(false)}>
                                    {ele.title}
                                </Link>
                            </li>
                        );
                    })}

                    <button className="w-40 text-sm font-normal border-2 border-secondary p-2 rounded-lg text-secondary">
                        الدورات بالعربية
                    </button>

                </ul>
            )}
        </nav>
    );
}



