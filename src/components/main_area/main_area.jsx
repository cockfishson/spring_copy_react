import HeaderDescription from "./description/header_description";
import DescriptionText from "./description/description_text";
import "../../style.css";

const MainArea = () => {
  return (
    <div className="description_box">
      <HeaderDescription />
      <DescriptionText />
    </div>
  );
};

export default MainArea;
