import React from 'react';
import withLocalization from '../../components/hoc/withLocalization';
import Title from '../../components/Title';
import phonebookIcon from '../../images/phone-book.svg';
import { motion, AnimatePresence } from 'framer-motion';

import s from './HomePage.module.scss';

const HomePage = ({ localization }) => {
  const {
    greeting,
    appTarget,
    signUp,
    logIn,
    appAction,
    actionPress,
    logOut,
    outAppAction,
  } = localization.localizedContent;

  return (
    <div className={s.homePage}>
      <Title primaryTitle={greeting} titleClass="titleGreeting">
        {' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>

      <p className={s.iconPhonebook}>
        {appTarget}{' '}
        <span role="img" aria-label="Phonebook icon">
          📒
        </span>
      </p>

      {/* {isLoggedIn && ( */}
      {/* <p className={s.iconPhonebookAct}>
        {actionPress} <span className={s.act}>{logOut}</span> {outAppAction}.
      </p> */}
      {/* )} */}

      {/* {!isLoggedIn && ( */}
      <p className={s.iconPhonebookAct}>
        {actionPress} <span className={s.act}>{signUp}</span> /{' '}
        <span className={s.act}>{logIn}</span> {appAction}.
      </p>
      {/* )} */}
      <AnimatePresence>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          src={phonebookIcon}
          alt="phonebookIcon"
          width="300"
          className={s.phoneIcon}
        />
      </AnimatePresence>
    </div>
  );
};

export default withLocalization(HomePage);
