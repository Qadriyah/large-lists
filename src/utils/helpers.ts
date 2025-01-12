import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classnames = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
