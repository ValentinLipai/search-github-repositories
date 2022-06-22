import React from 'react';
import { Placeholder } from 'Components';
import styles from './Profile.module.scss';

export const ProfilePlaceholder = () => (
  <div className="container">
    <div className={styles.profileHeader}>
      <div className={styles.profileHeader__username}>
        <div className={`placeholderWrapper ${styles.profileHeader__usernamPlaceholder}`}><Placeholder /></div>
      </div>
    </div>
    <div className={styles.profile}>
      <div className={styles.profile__left}>
        <div className={`placeholderWrapper ${styles.profile__image}`}><Placeholder /></div>
        <div className={`placeholderWrapper ${styles.profile__link} ${styles.profile__linkPlaceholder}`}><Placeholder /></div>
      </div>
      <div className={styles.profile__right}>
        <ul className={styles.profileParams}>
          <li className={[
            'placeholderWrapper',
            styles.profileParams__item,
            styles.profileParams__itemPlaceholder].join(' ')}
          >
            <Placeholder />
          </li>
          <li className={[
            'placeholderWrapper',
            styles.profileParams__item,
            styles.profileParams__itemPlaceholder].join(' ')}
          >
            <Placeholder />
          </li>
          <li className={[
            'placeholderWrapper',
            styles.profileParams__item,
            styles.profileParams__itemPlaceholder].join(' ')}
          >
            <Placeholder />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProfilePlaceholder;
