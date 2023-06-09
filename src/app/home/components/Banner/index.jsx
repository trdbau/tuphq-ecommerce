'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

// icon
import DropdownRight from '@/svgs/DropDown-right.svg';

import Slider from './components/Slider';

import './Banner.scss';
// Import Swiper styles

const modulesSwiper = [Pagination];
const paginationSwiper = { clickable: true };
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
};

function Banner() {
  const [isBarsOpen, setIsBarsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleBars = () => {
    setIsBarsOpen(!isBarsOpen);
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsBarsOpen(false);
      }
    },
    [setIsBarsOpen, sidebarRef]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="banner-wrapper">
      <div className="banner container flex">
        <button
          aria-label="sidebar"
          type="button"
          onClick={toggleBars}
          className="fa-bars-icon"
        >
          <FontAwesomeIcon icon={faBars} className="w-[24px] h-[24px]" />
        </button>
        <div
          ref={sidebarRef}
          className={classNames('sidebar', 'flex-auto', {
            showBars: isBarsOpen === true,
          })}
        >
          {isBarsOpen === true && (
            <button
              aria-label="close"
              type="button"
              onClick={toggleBars}
              className={classNames(
                'flex',
                'justify-end',
                'pr-[12px]',
                'mb-[12px]'
              )}
            >
              <FontAwesomeIcon icon={faClose} className="close-icon" />
            </button>
          )}
          <ul className="sidebar__menu ">
            <li className="sidebar-item sp-bw">
              <span className="font-poppins">Woman&apos;s Fashion</span>
              <DropdownRight className="dropdown-right-icon" />
            </li>
            <li className="sidebar-item sp-bw">
              <span className="font-poppins">Men&apos;s Fashion</span>
              <DropdownRight className="dropdown-right-icon" />
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Electronics</span>
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Home & Lifestyle</span>
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Medicine</span>
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Sports & Outdoor</span>
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Baby{`&quot;`}s & Toys</span>
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Groceries & Pets</span>
            </li>
            <li className="sidebar-item">
              <span className="font-poppins">Health & Beauty</span>
            </li>
          </ul>
        </div>
        <div className="slider flex-auto w-full">
          <Swiper
            modules={modulesSwiper}
            spaceBetween={0}
            slidesPerView={1}
            pagination={paginationSwiper}
            breakpoints={breakpointsSwiper}
          >
            <SwiperSlide>
              <Slider
                title="iPhone 14 Series"
                discount="Up to 10% off Voucher"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                title="iPhone 14 Series"
                discount="Up to 10% off Voucher"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                title="iPhone 14 Series"
                discount="Up to 10% off Voucher"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Banner);
