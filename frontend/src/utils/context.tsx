// src/AppContext.tsx

import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AppContextType {
  currentChatServer: string | null;
  setCurrentChatServer: React.Dispatch<React.SetStateAction<string | null>>;
  chatserveruuid: string | null;
  setchatserveruuid: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [currentChatServer, setCurrentChatServer] = useState<string | null>(null);
    const [chatserveruuid, setchatserveruuid] = useState<string | null>(null);
    const value = { currentChatServer, setCurrentChatServer, chatserveruuid, setchatserveruuid };
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);