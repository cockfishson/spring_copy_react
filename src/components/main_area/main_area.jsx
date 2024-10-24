import HeaderDescription from "./description/header_description";
import DescriptionText from "./description/description_text";
import { DESCRIPTION_DATA } from "../../data/description_content";
import "../../style.css";

const MainArea = () => {
  return (
    <div className="description_box">
      <HeaderDescription title={DESCRIPTION_DATA.header_content} />
      <DescriptionText text={DESCRIPTION_DATA.text_content} />
    </div>
  );
};

export default MainArea;
