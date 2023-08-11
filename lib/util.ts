import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formmatterCurrency = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN'
})