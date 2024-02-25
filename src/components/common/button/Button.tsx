import classNames from 'classnames';

interface ButtonProps extends React.ComponentProps<'button'> {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  square?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  disabled = false,
  onClick = () => {},
  leftIcon,
  rightIcon,
  square = false,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        `bg-button h-10 flex items-center justify-center px-8 py-3 
        border border-transparent text-base font-medium 
        rounded-md bg-background2 hover:bg-border 
        hover:text-primary md:py-4 md:text-lg md:px-10
        shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out
         hover:bg-neutral-500 
          focus:bg-neutral-800 
           focus:outline-none focus:ring-0 active:bg-neutral-900  dark:bg-neutral-900  dark:hover:bg-neutral-900 
            dark:focus:bg-neutral-900 
             dark:active:bg-neutral-900 
        `,
        className,
        disabled &&
          'bg-background3 text-gray-200 hover:cursor-not-allowed hover:bg-gray-500',
        square && 'aspect-square',
      )}
      onClick={onClick}
    >
      <span className="text-text-color_2 flex gap-2 h-full items-center justify-center ">
        {leftIcon && leftIcon}
        <span className="text-white text-sm">{children}</span>
        {rightIcon && rightIcon}
      </span>
    </button>
  );
};

export default Button;
