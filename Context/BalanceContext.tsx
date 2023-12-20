import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type balanceContextType = {
  balance: number;
  setBalance: Dispatch<SetStateAction<number>>;
};

export const BalanceContext = createContext<balanceContextType>({
  balance: 0,
  setBalance: () => {},
});

export const BalanceProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [balance, setBalance] = useState<number>(0);
  // useEffect(() => {
  //   setBalance(parseInt(localStorage.getItem("balance") || "0"));
  // }, []);
  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export function useBalanceContext() {
  return useContext(BalanceContext);
}
