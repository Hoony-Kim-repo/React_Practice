import NewsletterPage, {
  action as newsletterAction,
} from "../pages/newsletter/Newsletter";

const newsletterRoute = {
  path: "newsletter",
  element: <NewsletterPage />,
  action: newsletterAction,
};

export default newsletterRoute;
