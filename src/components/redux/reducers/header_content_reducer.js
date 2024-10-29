const initialHeaderContent = [
  {
    main: "Why Spring",
    subs: [
      { title: "Overview" },
      { title: "Microservices" },
      { title: "Reactive" },
      { title: "Event Driven" },
      { title: "Cloud" },
      { title: "Web Applications" },
      { title: "Serverless" },
      { title: "Batch" },
    ],
  },
  {
    main: "Learn",
    subs: [
      { title: "Overview" },
      { title: "Quickstart" },
      { title: "Guides" },
      { title: "Blog" },
    ],
  },
  {
    main: "Projects",
    subs: [
      { title: "Overview" },
      { title: "Spring Boot" },
      { title: "Spring Framework" },
      { title: "Spring Cloud" },
      { title: "Spring Cloud Data Flow" },
      { title: "Spring Data" },
      { title: "Spring Integration" },
      { title: "Spring Batch" },
      { title: "Spring Security" },
      { title: "Spring AI" },
      { title: "View all projects", type: "viewAll" },
      { title: "DEVELOPMENT TOOLS", type: "devTools" },
      { title: "Spring Tools 4" },
      { title: "Spring Initializr", type: "special" },
    ],
  },
  {
    main: "Academy",
    subs: [{ title: "Courses" }, { title: "Get Certified" }],
  },
  {
    main: "Solutions",
    subs: [
      { title: "Overview" },
      { title: "Tanzu Spring" },
      { title: "Spring Consulting" },
      { title: "Spring Academy For Teams" },
      { title: "Security Advisories" },
    ],
  },
  {
    main: "Community",
    subs: [{ title: "Overview" }, { title: "Events" }, { title: "Authors" }],
  },
];

const initialHeaderState = {
  header: initialHeaderContent,
};

const headerContentReducer = (state = initialHeaderState, action) => {
  return state;
};

export default headerContentReducer;
