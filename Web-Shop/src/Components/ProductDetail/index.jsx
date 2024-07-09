import { useContext } from "react";
import {XCircleIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
    const {setOpenModal, productShow} = useContext(ShoppingCartContext);

    const onCancel = () => {setOpenModal(false)};
    return (
        <div>
            <div>Detail</div>
            <div onClick={onCancel}><XCircleIcon></XCircleIcon>
            </div>
            <figure>
                <img src="" alt="" />
            </figure>
            <div>
                <h2>nombre producto</h2>
                <p>precio</p>
                <p>descripcion</p>
            </div>
        </div>

    )
}

export default ProductDetail;