import Header from "./header/header";
import TitleArea from "./title_area/title_area";
import SearchAndCardArea from "./search_and_card_area/search_and_card_area";
import "./projects_page.css";

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <TitleArea />
      <SearchAndCardArea />
    </div>
  );
};

export default ProjectsPage;
