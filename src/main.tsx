import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductsContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { FilterProvider } from './context/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CartProvider>
      <ProductProvider>
        <FilterProvider>
          <App />

        </FilterProvider>
      </ProductProvider>
    </CartProvider>
)
