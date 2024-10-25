import { ReactComponent as LogoIcon } from "../../../../media/header_icons/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div class="logo_wrap">
      <LogoIcon className="logo" />
    </div>
  );
};

export default Logo;
