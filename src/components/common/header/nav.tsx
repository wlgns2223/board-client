import Icon from "../../util/icon";
import Logo from "@/assets/logo.svg";
import MyLink from "../link/my-link";
import { PATH } from "../../../core/path";

export default function Nav() {
    return (
        <nav className="max-w-screen-xl mx-auto w-full h-full flex justify-between items-center ">
            <Icon className="w-12 h-12 ">
                <Logo />
            </Icon>

            <MyLink href={PATH.signIn}>{"로그인"}</MyLink>
        </nav>
    );
}
