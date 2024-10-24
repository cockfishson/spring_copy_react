import springBootSvg from "../media/card_icons/spring-boot.svg";
import springFrameworkSvg from "../media/card_icons/spring-framework.svg";
import springDataSvg from "../media/card_icons/spring-data.svg";
import springCloudSvg from "../media/card_icons/spring-cloud.svg";
import springDataFlowSvg from "../media/card_icons/spring-data-flow.svg";
import springSecuritySvg from "../media/card_icons/spring-security.svg";

export const CARDS_DEFAULT = [
  {
    imgSrc: springBootSvg,
    title: "Spring Boot",
    description:
      "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
  },
  {
    imgSrc: springFrameworkSvg,
    title: "Spring Framework",
    description:
      "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
  },
  {
    imgSrc: springDataSvg,
    title: "Spring Data",
    description:
      "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
  },
  {
    imgSrc: springCloudSvg,
    title: "Spring Cloud",
    description:
      "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    imgSrc: springDataFlowSvg,
    title: "Spring Cloud Data Flow",
    description:
      "Provides an orchestration service for composable data microservice applications on modern runtimes.",
  },
  {
    imgSrc: springSecuritySvg,
    title: "Spring Security",
    description:
      "Protects your application with comprehensive and extensible authentication and authorization support.",
  },
];
