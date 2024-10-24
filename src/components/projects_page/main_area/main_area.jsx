import HeaderDescription from "./description/header_descriprion/header_description";
import DescriptionText from "./description/description_text/description_text";
import { DESCRIPTION_DATA } from "../../../data/description_content";
import "./main_area.css";

const MainArea = () => {
  return (
    <div className="description_box">
      <HeaderDescription title={DESCRIPTION_DATA.header_content} />
      <DescriptionText text={DESCRIPTION_DATA.text_content} />
    </div>
  );
};

export default MainArea;
