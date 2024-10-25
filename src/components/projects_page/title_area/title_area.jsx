import HeaderDescription from "./description/header_description/header_description";
import DescriptionText from "./description/description_text/description_text";
import { DESCRIPTION_DATA } from "../../../data/description_content";
import "./title_area.css";

const TitleArea = () => {
  return (
    <div className="description_box">
      <HeaderDescription title={DESCRIPTION_DATA.header_content} />
      <DescriptionText text={DESCRIPTION_DATA.text_content} />
    </div>
  );
};

export default TitleArea;
