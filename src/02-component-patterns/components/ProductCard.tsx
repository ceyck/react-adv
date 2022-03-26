import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { productContextProps, ProductCardProps } from '../interfaces/interfaces';

export const productContext = createContext({} as productContextProps);

const { Provider } = productContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}
