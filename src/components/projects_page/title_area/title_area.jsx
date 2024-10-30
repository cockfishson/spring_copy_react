import HeaderDescription from "./description/header_description/header_description";
import DescriptionText from "./description/description_text/description_text";
import { titleAreaContent } from "../../../data/title_area_content";
import "./title_area.css";

const TitleArea = () => {
  return (
    <div className="description_box">
      <HeaderDescription title={titleAreaContent.header_content} />
      <DescriptionText text={titleAreaContent.text_content} />
    </div>
  );
};

export default TitleArea;
