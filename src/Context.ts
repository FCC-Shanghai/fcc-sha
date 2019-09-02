import { createContext } from 'react';

export interface LocaleContextType {
  locale: any
};

export const LocaleContext = createContext<LocaleContextType>({ 
  locale: {}
});
