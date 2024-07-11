import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart- increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Show product
    const [openModal, setOpenModal] = useState(false);
    const [productShow, setProductShow] = useState({});

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


    return(
        <ShoppingCartContext.Provider value= {{
            count,
            setCount,
            openModal,
            setOpenModal,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };