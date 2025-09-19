import NewsletterLayout from "../layouts/NewsletterLayout";
import Newsletter, { action as newsletterAction } from "../pages/Newsletter";

const NewsletterRoutes = [
  {
    path: "/newsletter",
    Component: NewsletterLayout,
    children: [
      {
        index: true,
        Component: Newsletter,
        action: newsletterAction,
      },
    ],
  },
];

export default NewsletterRoutes;
