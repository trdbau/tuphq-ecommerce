"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from './components/Card';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import TimeCountDown from "./components/TimeCountDown";
import Image from "next/image";
import Link from "next/link";


import './Bestseller.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

const moduleSwiper = [Pagination, Navigation]
const breakpointsSwiper = {
    320: {
        slidesPerView: 1,
        spaceBetween: 20
    },

    576: {
        slidesPerView: 2,
        spaceBetween: 30
    },

    768: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    992: {
        slidesPerView: 3,
        spaceBetween: 40
    },
    1200: {
        slidesPerView: 4,
        spaceBetween: 40
    }
}

SwiperCore.use(moduleSwiper);
export default function BestSeller() {
    const swiperRef = useRef(null);

    return (
        <div className="bestseller-wrapper container">
            <div className='bestseller-heading'>
                <span className='block'></span>
                <span className="font-poppins">This Month</span>
            </div>
            <div className='bestseller-control'>
                <h1 className="font-inter">Best Selling Products</h1>
                <div className='view-all'>
                    <button className="btn-view-all">
                        <Link href='/' className="btn-view-all__link font-poppins">
                            View All
                        </Link>
                    </button>
                </div>
            </div>
            <div className='product-bs'>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={moduleSwiper}
                    breakpoints={breakpointsSwiper}>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="banner-product">
                <div className="banner-product__img">
                    <Image
                        src={'/image/image-bestselling.png'}
                        alt="best selling"
                        fill={true}
                    />
                </div>
                <div className="banner-product__text">
                    <span className="banner-product__text-categories font-poppins">Categories</span>
                    <span className="banner-product__text-content font-inter">Enhance Your Music Experience</span>
                    <TimeCountDown />
                    <button className="banner-product__btn">
                        <Link className="font-poppins" href="/">Buy Now</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}