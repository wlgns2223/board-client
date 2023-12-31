import { PropsWithChildren, ReactElement, cloneElement } from "react";

interface IIcon extends React.SVGProps<SVGSVGElement> {}
export default function Icon({ children, ...rest }: PropsWithChildren<IIcon>) {
    return cloneElement(children as ReactElement, rest);
}
