"use client";

import { cn, formmatterCurrency } from "@/lib/util";
import React from "react";

interface CurrencyProps {
  value?: string | number;
  className?: string;
}

const Currency: React.FC<CurrencyProps> = ({ value, className }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={cn("font-semibold", className)}>
      {formmatterCurrency.format(Number(value))}
    </div>
  );
};

export default Currency;
