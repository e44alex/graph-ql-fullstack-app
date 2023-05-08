import { ReactElement } from 'react';

export const Loader = () => {
  return <p>Loading...</p>;
};

export type WithLoaderProps = {
  children: ReactElement
  isLoading: boolean;
}

export const WithLoader = ({ children, isLoading }: WithLoaderProps) => {

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};