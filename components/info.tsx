"use client"
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import { Heart, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="flex items-center justify-start gap-10 mt-4">
        <Currency value={Number(data?.price) - Number(data?.price) * 0.08} />

        {/* offer */}
        <div className="flex items-center justify-between gap-2">
          <Currency className="line-through" value={data?.price} />
          <span className="text-red-500">-8%</span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Talla:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 text-sm flex items-center justify-between gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Agregar al carrito
          <ShoppingCart className="hidden md:block" size={20} />
        </Button>

        <Button
          className="bg-white text-black border
         border-black hover:bg-black hover:text-white flex items-center gap-x-2"
        >
          Lista de deseados
          <Heart className="hidden md:block" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
