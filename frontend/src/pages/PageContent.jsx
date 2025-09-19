import css from "./PageContent.module.css";

const PageContent = ({ title, children }) => {
  return (
    <div className={css.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
