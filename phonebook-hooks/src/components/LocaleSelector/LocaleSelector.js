import React from 'react';
import { motion } from 'framer-motion';
import withLocalization from '../hoc/withLocalization';
import s from './LocaleSelector.module.scss';

const LocaleSelector = ({ localization }) => {
  const { currentLocale, locales, changeLocale } = localization;

  return (
    <motion.section
      className={s.selector}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      {locales.map(locale => (
        <button
          key={locale}
          onClick={() => changeLocale(locale)}
          className={locale === currentLocale ? s.active : s.button}
        >
          {locale}
        </button>
      ))}
    </motion.section>
  );
};

export default withLocalization(LocaleSelector);
