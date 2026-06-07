import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "dark" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60 disabled:cursor-not-allowed";

const sizes = "px-6 py-3 text-sm sm:text-base";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-ink hover:bg-gold-deep hover:text-white",
  outline: "border border-ink/15 text-ink hover:border-gold hover:text-gold-deep bg-white",
  dark: "bg-ink text-white hover:bg-ink-soft",
  ghost: "text-ink-soft hover:text-gold-deep",
};

type CommonProps = {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...rest
}: CommonProps & {
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    const isHash = href.startsWith("#");
    if (external || isHash) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
