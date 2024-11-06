import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    types: string;
    href?: string;
}

export default function Button({
    types,
    href,
    className,
    ...rest
}: ButtonProps) {
    return (
        <button className={cn(
            `bg-purple-main rounded-[6px] px-4 py-0.5 text-white-soft`,
            className
        )} {...rest}>

        </button>
    )
}