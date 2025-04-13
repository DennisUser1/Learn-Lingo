import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labe?: string;
  type?: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, type, ...props }, ref) => {
    return (
      <>
        <div className="relative">
          <input
            ref={ref}
            {...props}
            type="text"
            className="w-full bg-white dark:bg-dark-light border border-solid border-black/10 dark:border-white/10 rounded-xl py-4 px-4.5 text-base font-normal placeholder:text-black dark:placeholder:text-white focus:border-grey transition-all duration-200 ease-in outline-none"
          />
        </div>
        {error && <p className="text-sm text-red-500 mt-2">{error.message}</p>}
      </>
    );
  }
);

export default Input;
