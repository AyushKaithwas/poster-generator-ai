import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

export function PrimaryLink(props: LinkProps & { children: ReactNode }) {
  return (
    <Link
      className="hover:text-primary text-sm ease-in-out duration-200"
      {...props}
    >
      {props.children}
    </Link>
  );
}
