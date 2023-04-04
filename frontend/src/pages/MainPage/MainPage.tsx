import React from 'react';
import { Button } from '../../components/Button/Button';

export interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div>
      Main Page
      <Button>click me</Button>
    </div>
  );
};
