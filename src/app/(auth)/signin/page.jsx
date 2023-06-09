import React from 'react';
import Image from 'next/image';

import SignInForm from './components/SignInForm';

import styles from './SignIn.module.scss';

function SignIn() {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.sideImg}`}>
        <Image
          src="/image/Auth/side-img.png"
          alt="side img"
          fill
          priority
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={`${styles.signInForm}`}>
        <span className={`${styles.titleText} font-inter`}>
          Log in to Exclusive
        </span>
        <span className={`${styles.noticeText} font-poppins`}>
          Enter your details below
        </span>
        <SignInForm />
      </div>
    </section>
  );
}

export default React.memo(SignIn);
