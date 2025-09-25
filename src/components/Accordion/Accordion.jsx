import { createContext, useContext, useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>"
    );
  }

  return context;
};

const Accordion = ({ className, children }) => {
  const [openItemId, setOpenItemId] = useState();

  const toggleItem = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
