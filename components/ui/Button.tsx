import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 group";

  const variants = {
    primary: "bg-[--color-sea] text-white hover:bg-[--color-sea-hover] shadow-sm hover:shadow-md",
    outline:
      "border-2 border-[--color-sea] text-[--color-sea] hover:bg-[--color-sea] hover:text-white",
    ghost: "text-white border-2 border-white/40 hover:bg-white hover:text-[--color-sea]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
