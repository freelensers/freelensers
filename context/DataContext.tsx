import { createContext, useState, ReactNode, useContext } from 'react';

type dataContextType = {
  createModalIsOpen: boolean;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  account: any;
  setAccount: any;
}

const dataContextDefaultValues: dataContextType = {
  createModalIsOpen: false,
  openCreateModal: () => {},
  closeCreateModal: () => {},
  account: null,
  setAccount: null,
}

type Props = {
  children: ReactNode;
};

const DataContext = createContext<dataContextType>(dataContextDefaultValues)

export function useDataContext() {
  return useContext(DataContext)
}

export const DataContextProvider = ({ children }: Props) => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  function openCreateModal() {
    setCreateModalIsOpen(true);
    console.log('open');
    document.getElementsByTagName("body")[0].classList.add("popup-open");
  }

  function closeCreateModal() {
    setCreateModalIsOpen(false);
    document.getElementsByTagName("body")[0].classList.remove("popup-open");
  }
  
  const [account, setAccount] = useState(null);

  const value = {
    createModalIsOpen,
    openCreateModal,
    closeCreateModal,
    account,
    setAccount,
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
