import classNames from "classnames";
import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  helperText?: string | ReactNode;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  error?: boolean;
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null;
  size?: number;
  btnAction?: ReactNode;
  isRtl?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
const Input: FunctionComponent<InputProps> = (
  props,
  ref: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
) => {
  const {
    label,
    helperText,
    disabled,
    placeholder,
    className,
    error,
    size,
    name,
    btnAction,
    multiline,
    ...rest
  } = props;

  return (
    <div className="relative w-full ">
      {label && <span className="mb-10">{label}</span>}
      <div
        className="flex items-center justify-center"
      >
        {multiline ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          <textarea
            {...rest}
            name={name}
            title={label}
            placeholder={placeholder}
            disabled={disabled}
            className={`${className} ${error ? "border-primary" : ""} ${
              disabled ? "bg-black" : ""
            }`}
            ref={ref}
          />
        ) : (
          <input
            {...rest}
            name={name}
            title={label}
            type={rest.type ?? "text"}
            placeholder={placeholder}
            disabled={disabled}
            size={size}
            className={classNames(
              `
               h-10 p-2 font-normal border 
               rounded-md text-gray-900 text-sm w-full 
               focus:border-gray-200 focus:bg-gray-100
                outline-none bg-background2 border-background3 text-text-color_1 
              `,
              disabled && "!bg-gray-50 !text-gray-600"
            )}
            ref={ref}
          />
        )}

        {btnAction && btnAction}
      </div>
      {error && helperText && (
        <p className="absolute mx-4 text-xs font-medium text-primary">
          {helperText}
        </p>
      )}
    </div>
  );
};

// Input.defaultProps = {
//   label: '',
//   name: '',
//   helperText: '',
//   disabled: false,
//   placeholder: '',
//   className: '',
//   error: false,
//   size: 'small',
//   btnAction: null,
//   multiline: false,
//   isLtr: false,
// };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(Input);
