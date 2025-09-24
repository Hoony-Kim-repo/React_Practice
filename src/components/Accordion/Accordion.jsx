import { createContext, useContext, useState } from "react";

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

  const openItem = (id) => {
    setOpenItemId(id);
  };

  const closeItem = () => {
    setOpenItemId(null);
  };

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;
