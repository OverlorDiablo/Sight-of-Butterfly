import React from 'react'
import styles from './googleMap.module.css'

export const GoogleMap: React.FC = () => {
  return (
    <div className={styles['google-map']}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d669.3421595396452!2d35.13735758882702!3d47.851823463579976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc67c26e9444d5%3A0xab6804ab57b1d791!2zR2xvYmFsIEF1dG8gUGFydHMg4oCTINCX0LDQv9GH0LDRgdGC0LjQvdC4INC00LvRjyDRltC90L7QvNCw0YDQvtC6!5e0!3m2!1sru!2sua!4v1637672248797!5m2!1sru!2sua"
        width="100%"
        height="500"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}