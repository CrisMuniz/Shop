import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart
    const [count, setCount] = useState(0);
    //Product Detail
    const [openModal, setOpenModal] = useState(false);
    const [productShow, setProductShow] = useState({});

    return(
        <ShoppingCartContext.Provider value= {{
            count,
            setCount,
            openModal,
            setOpenModal,
            productShow,
            setProductShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };