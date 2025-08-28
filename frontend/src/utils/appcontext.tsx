// src/hooks/useAppContext.tsx (새로 만드는 파일)

import { useContext } from 'react';
import { AppContext } from './context'; // AppContext 객체만 임포트

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext는 AppProvider 내부에서 사용해야 합니다.');
  }
  return context;
};