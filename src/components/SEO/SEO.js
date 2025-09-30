import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const seoData = {
  "/": {
    title: "Dmytro | Frontend Developer",
    description: "Hi, I'm Dmytro — Junior Frontend Developer passionate about ReactJS, NodeJS, and modern web technologies.",
  },
  "/resume": {
    title: "Resume | Dmytro",
    description: "Frontend developer with over 2 years of experience in software development. Proficient in JavaScript, NodeJS, and React.",
  },
  "/contacts": {
    title: "Contact | Dmytro",
    description: "Get in touch with Dmytro for collaborations or inquiries.",
  },
};

export default function SEO() {
  const { pathname } = useLocation();
  const { title, description } = seoData[pathname] || seoData["/"];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
    </Helmet>
  );
}