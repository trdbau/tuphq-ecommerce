import Image from 'next/image'
import './Cart.scss'
import { useState } from 'react';
import classNames from 'classnames';
import Star from '@/svgs/star.svg'

export default function Cart(props) {
    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <div className={`cart ${props.className}`}>
            <div className='image'>
                <Image
                    width={500}
                    height={250}
                    src={`/image/test2.png`}
                    alt='product'
                />
                <div className='icon-wrapper'>
                    <span className='heart-small-icon'>
                        <Image
                            src='image/heart-small.svg'
                            width={24}
                            height={24}
                            alt='heart small'
                        />
                    </span>
                    <span className='quick-view-icon'>
                        <Image
                            src='image/Quick-View.svg'
                            width={24}
                            height={24}
                            alt='quick view'
                        />
                    </span>
                </div>

                <div className='add-cart'>
                    <span className='font-poppins'>Add To Cart</span>
                </div>
            </div>
            <div className='description'>
                <span className='name font-poppins'>{props.name}</span>

                <div className='description__wrapper'>
                    <div className='rate'>
                        <span className='price-default font-poppins'>${props.sale}</span>


                        <div className='star'>
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                        </div>

                        <span className='font-poppins count'>({props.count})</span>

                    </div>
                    {props.color && <div className='color'>
                        <button onClick={handleClick} className={classNames({ active: active, 'no-active': !active })}>
                            <span />
                        </button>
                        <button onClick={handleClick} className={classNames({ active: !active, 'no-active': active })}>
                            <span />
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}