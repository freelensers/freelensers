import { createContext, useState, ReactNode, useContext } from 'react';

type dataContextType = {
  createModalIsOpen: boolean;
  openCreateModal: () => void;
  closeCreateModal: () => void;
}

const dataContextDefaultValues: dataContextType = {
  createModalIsOpen: false,
  openCreateModal: () => {},
  closeCreateModal: () => {},
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
  
  const value = {
    createModalIsOpen,
    openCreateModal,
    closeCreateModal,
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
