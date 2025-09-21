import { Suspense } from "react";

const SuspenseWrapper = (Component) => {
  const Wrapped = (props) => (
    <Suspense fallback={<p>Loading...</p>}>
      <Component {...props} />
    </Suspense>
  );

  Wrapped.displayName = `SuspenseWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default SuspenseWrapper;
