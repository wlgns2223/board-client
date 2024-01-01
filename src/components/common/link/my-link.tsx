import Link from "next/link";
import { PropsWithChildren } from "react";
import classNames from "classnames";

export type TLink = {
    href: string;
    className?: string;
};

export default function MyLink({ children, href, ...rest }: PropsWithChildren<TLink>) {
    return (
        <Link
            {...rest}
            href={href}
            className={classNames(
                "flex justify-center items-center rounded-md text-white px-4 py-2 bg-blue-400 text"
            )}
        >
            {children}
        </Link>
    );
}
