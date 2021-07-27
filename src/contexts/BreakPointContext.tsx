import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState
} from 'react';
import { getWindowDimensions } from '../utils/getWindowsDimensions';

interface BreakPointProps {
  children: ReactNode;
}

type BreakPointContextData = {
  windowDimensions: { width: number };
  isWide: boolean;
};

const BreakPointContext = createContext({} as BreakPointContextData);

export function BreakPointProvider({ children }: BreakPointProps) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    if (windowDimensions.width >= 768) {
      setIsWide(true);
      return;
    }
    setIsWide(false);
  }, [windowDimensions.width]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BreakPointContext.Provider value={{ windowDimensions, isWide }}>
      {children}
    </BreakPointContext.Provider>
  );
}

export const useBrakPointValue = () => useContext(BreakPointContext);
