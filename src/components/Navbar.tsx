'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import {cn} from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Maps</Link>
                <Link href={"/analysis"}>Analysis</Link>
                <Link href={"/resource"}>Resource</Link>
                <Link href={"/about"}>About</Link>
            </Menu>
        </div>
    )
}