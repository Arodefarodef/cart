"use client";

import Image from "next/image";
import React from "react";
import grenade from "@/public/grenade.jpeg";
import revolve from "@/public/revolve.jpeg";
import { Button } from "@/components/ui/button";
import { data } from "@/app/data";
import { addProduct, addProductToCart } from "./global/redux";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const things = dispatch(addProduct(data));

  const prods = useSelector((state: any) => {
    state.reducer.products;
  });

  return (
    <div className="px-[40px] mt-[-70px] z-1">
      <div className="flex items-center justify-center w-full h-screen ">
        <div className="grid grid-col-1 items-center justify-center md:flex items-center justify-center w-[100%] h-[80%]">
          <Image
            width={1000}
            height={1000}
            src={revolve}
            alt=""
            className="h-[95%] w-[45%] object-cover"
          />
          <div className="w-[45%] h-[90%] font-bold text-[80px] flex items-center justify-center leading-[80px]">
            REVOLVER
            <br />
            $400
          </div>
        </div>
      </div>

      <div className="font-bold text-[20px] flex items-center underline mt-[15px] mr-11">
        Shop Now
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {things.payload?.map((el: any) => (
          <div
            key={el.id}
            className="border rounded-md p-1 flex flex-col gap-2"
          >
            <Image
              width={1000}
              height={1000}
              src={el.image}
              alt=""
              className="h-[340px] object-contain"
            />
            <h1>{el.title}</h1>
            <div className="font-medium text-[14px] text-grey-800">
              <p>{el.price}</p>
              <p
                onClick={() => {
                  dispatch(addProductToCart(el));
                }}
                className="underline text-[12px] cursor-pointer"
              >
                Add To cart
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
