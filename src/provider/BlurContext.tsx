import { createContext } from "react";

export type BlurContextType = {
  blur: boolean | null;
  setBlur: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BlurContext = createContext<BlurContextType>(null!);
