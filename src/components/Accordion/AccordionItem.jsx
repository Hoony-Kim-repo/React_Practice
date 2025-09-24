import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ id, className, title, children }) => {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  const onExpand = () => {
    if (isOpen) closeItem();
    else openItem(id);
  };
  return (
    <li className={className}>
      <h3 onClick={onExpand}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
};

export default AccordionItem;
