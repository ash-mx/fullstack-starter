import { forwardRef } from "react";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button ref={ref} className={styles.button} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
