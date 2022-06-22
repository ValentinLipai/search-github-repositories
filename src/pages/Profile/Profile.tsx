import React, { useEffect, useState } from 'react';
import { useCurrentStateAndParams, useRouter } from '@uirouter/react';
import { fetchAuthorInfo } from 'Helpers/api';
import { GitHubUserInfo } from 'Types/api';
import { Store } from 'react-notifications-component';
import { Placeholder } from 'Components';
import { ProfilePlaceholder } from './ProfilePlaceholder';
import styles from './Profile.module.scss';

export const Profile = () => {
  const [profileData, setProfileData] = useState<GitHubUserInfo>();
  const [isLoading, setIsLoading] = useState(true);
  const { params } = useCurrentStateAndParams();
  const router = useRouter();

  useEffect(() => {
    if (!params.authorName) {
      Store.addNotification({
        title: 'Error!',
        message: 'Error: authorName is not provided',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      router.stateService.go('home');
      return;
    }
    fetchAuthorInfo(params.authorName).then((res) => {
      setProfileData(res);
      setIsLoading(false);
    });
  }, [params.authorName]);

  return (
    <div className="container">
      {isLoading
        ? <ProfilePlaceholder />
        : (
          <>
            <div className={styles.profileHeader}>
              <button
                className={styles.profileHeader__back}
                type="button"
                onClick={() => { window.history.back(); }}
              >
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.937513 13.0103C0.354162 12.427 0.354162 11.4812 0.937513 10.8978L10.4438 1.39157C11.0271 0.808218 11.9729 0.808218 12.5562 1.39157C13.1396 1.97492 13.1396 2.92072 12.5562 3.50407L5.60002 10.4603H21.9106V13.4478H5.60002L12.5562 20.404C13.1396 20.9874 13.1396 21.9332 12.5562 22.5165C11.9729 23.0999 11.0271 23.0999 10.4438 22.5165L0.937513 13.0103Z" fill="white" />
                </svg>
                <span>Go back</span>
              </button>
              <h1 className={styles.profileHeader__username}>
                {isLoading
                  ? <Placeholder />
                  : profileData.login}
              </h1>
            </div>
            <div className={styles.profile}>
              <div className={styles.profile__left}>
                <div className={styles.profile__image}>
                  <img src={profileData.avatar_url} alt="" />
                </div>
                <a className={`btn ${styles.profile__link}`} href={profileData.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
              </div>
              <div className={styles.profile__right}>
                <ul className={styles.profileParams}>
                  {profileData.name && (
                  <li className={styles.profileParams__item}>
                    Name:&nbsp;
                    <b>{profileData.name}</b>
                  </li>
                  )}
                  {profileData.twitter_username && (
                  <li className={styles.profileParams__item}>
                    Twitter UserName:&nbsp;
                    <b>{profileData.twitter_username}</b>
                  </li>
                  )}
                  {profileData.company && (
                  <li className={styles.profileParams__item}>
                    Company:&nbsp;
                    <b>{profileData.company}</b>
                  </li>
                  )}
                  {profileData.location && (
                  <li className={styles.profileParams__item}>
                    Location:&nbsp;
                    <b>{profileData.location}</b>
                  </li>
                  )}
                  <li className={styles.profileParams__item}>
                    Public repositories:&nbsp;
                    <b>{profileData.public_repos}</b>
                  </li>
                  <li className={styles.profileParams__item}>
                    Followers:&nbsp;
                    <b>{profileData.followers}</b>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default Profile;
