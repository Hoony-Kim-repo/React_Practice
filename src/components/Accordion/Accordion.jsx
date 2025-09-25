import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

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

export default Accordion;
