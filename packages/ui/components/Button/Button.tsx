import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  ref,
  ...props
}: ButtonProps) => {
  return (
    <button ref={ref} className={styles.button} {...props}>
      {children}
    </button>
  );
};
