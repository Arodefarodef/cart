"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";
import {
  MdDoorbell,
  MdMenu,
  MdNotifications,
  MdShoppingCart,
} from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  // contextAPI useContext createContext REDUX
  const cart = useSelector((state: any) => state.reducer.cart);

  // const cart: number[] = [];

  return (
    <main className="flex justify-center w-full h-[50px] border-b mt-[30px]">
      <div className="w-[90%] h-full flex items-center justify-between ">
        <div className="flex items-center gap-6">
          <Link href="/">
            <p>Logo</p>
          </Link>
        </div>
        <div className="md:hidden justify-between items-center flex gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href="/cart">
          <section className="relative">
            {cart?.length > 0 && (
              <p className="absolute -top-2 left-2 text-white text-[8px] uppercase font-bold rounded-full bg-red-600 w-4 h-4 flex items-center justify-center">
                {cart?.length}
              </p>
            )}
            <MdShoppingCart />
          </section>
        </Link>
      </div>
    </main>
  );
};

export default Header;
