import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useRef,
  MutableRefObject,
  useEffect
} from 'react';

interface DropProps {
  children: ReactNode;
}

type DropContextData = {
  dropdownRef: MutableRefObject<HTMLDivElement>;
  completeListHospitalsRef: MutableRefObject<HTMLDivElement>;
  featuredHospitalsRef: MutableRefObject<HTMLDivElement>;
  isActive: boolean;
  isCompleteListActive: boolean;
  isFeaturedHospitalsActive: boolean;
  onOpen: (
    objectName: 'menu' | 'completeHospitals' | 'featuredHospitals'
  ) => void;
  onClose: () => void;
};

// CONTEXT TO DROP BUTTONS AND MENUS

const DropContext = createContext({} as DropContextData);

export function DropProvider({ children }: DropProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const completeListHospitalsRef = useRef<HTMLDivElement>(null);
  const featuredHospitalsRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [isCompleteListActive, setIsCompleteListActive] = useState(false);
  const [isFeaturedHospitalsActive, setFeaturedHospitalsActive] =
    useState(false);

  const onOpen = objectName => {
    switch (objectName) {
      case 'menu':
        setIsActive(!isActive);
        break;
      case 'completeHospitals':
        setIsCompleteListActive(!isCompleteListActive);
        break;
      case 'featuredHospitals':
        setFeaturedHospitalsActive(!isFeaturedHospitalsActive);
        break;

      default:
        break;
    }
  };

  const onClose = () => {
    setIsActive(false);
    setIsCompleteListActive(false);
    setFeaturedHospitalsActive(false);
  };

  useEffect(() => {
    onClose();
  }, []);

  return (
    <DropContext.Provider
      value={{
        dropdownRef,
        isActive,
        onOpen,
        onClose,
        completeListHospitalsRef,
        featuredHospitalsRef,
        isCompleteListActive,
        isFeaturedHospitalsActive
      }}
    >
      {children}
    </DropContext.Provider>
  );
}

export const useDrop = () => useContext(DropContext);
