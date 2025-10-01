import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const seoData = {
  "/": {
    title: "Dmytro | Frontend Developer",
    description: "Hi, I'm Dmytro — Junior Frontend Developer passionate about ReactJS, NodeJS, and modern web technologies.",
    image: "https://dmitro.dev/og-image.webp",
  },
  "/resume": {
    title: "Resume | Dmytro",
    description: "Frontend developer with over 2 years of experience in software development. Proficient in JavaScript, NodeJS, and React.",
    image: "https://dmitro.dev/og-image-resume.webp",
  },
  "/contacts": {
    title: "Contact | Dmytro",
    description: "Get in touch with Dmytro for collaborations or inquiries.",
    image: "https://dmitro.dev/og-image-contact.webp",
  },
};

export default function SEO() {
  const { pathname } = useLocation();
  const { title, description, image } = seoData[pathname] || seoData["/"];

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={`https://dmitro.dev${pathname}`} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://dmitro.dev${pathname}`} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}