"use client";
import React from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  React.useEffect(() => {
    if(searchParams.get('success')) {
      toast.success('Pago completado');
      removeAll();
    }

    if(searchParams.get('canceled')){
      toast.error('Algo salio mal, intentalo de nuevo o contacta con soporte');
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    })
    window.location = response.data.url
  }

  return (
    <div
      className="mt-16 rounded-lg bg-gray-50 
      px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 "
    >
      <h2 className="text-lg font-medium text-gray-900">
        Resumen de la orden
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total</div>
          <Currency value={totalPrice} />
        </div>

        <div className="flex items-center justify-between border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Descuento</div>
          <span className="text-red-500">-8%</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">SubTotal</div>
          <Currency value={totalPrice - totalPrice * 0.08} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">Checkout</Button>
    </div>
  );
};

export default Summary;
