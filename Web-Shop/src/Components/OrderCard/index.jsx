import {XCircleIcon} from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const OrderCard = ({title, imgUrl, price}) => {

    OrderCard.propTypes={
        title:PropTypes.node.isRequired,
        imgUrl:PropTypes.node.isRequired,
        price:PropTypes.node.isRequired,
    }
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XCircleIcon className="h-6 w-6 cursor-pointer text-black"></XCircleIcon>
            </div>
        </div>
    )

}

export default OrderCard;