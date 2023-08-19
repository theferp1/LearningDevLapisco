import { useState } from "react";
import { BlurContext } from "./BlurContext";

const BlurProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [blur, setBlur] = useState<boolean>(false);
  return (
    <BlurContext.Provider value={{ blur, setBlur }}>
      {children}
    </BlurContext.Provider>
  );
};

export default BlurProvider;
