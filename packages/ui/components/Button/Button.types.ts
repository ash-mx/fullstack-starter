import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
