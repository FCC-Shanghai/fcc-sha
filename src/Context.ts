import { createContext } from 'react';

export interface LocaleContextType {
  locale: {
    [key: string]: string
  }
};

export const LocaleContext = createContext<LocaleContextType>({ 
  locale: {}
});
