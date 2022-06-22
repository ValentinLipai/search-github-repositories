import { Store } from 'react-notifications-component';

export async function searchRepositoriesByName(query: string, page: number, perPage: number) {
  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`);
    return {
      code: response.status,
      data: await response.json(),
    };
  } catch (error) {
    Store.addNotification({
      title: 'Error!',
      message: `Error fetching repositories. Message: ${error}`,
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
    return null;
  }
}

export async function fetchAuthorInfo(profile: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${profile}`);
    return await response.json();
  } catch (error) {
    Store.addNotification({
      title: 'Error!',
      message: `Error fetching profile info. Message: ${error}`,
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
    return null;
  }
}

export async function fetchAuthorStarred(profile: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${profile}/starred`);
    return await response.json();
  } catch (error) {
    Store.addNotification({
      title: 'Error!',
      message: `Error fetching profile info. Message: ${error}`,
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
    return null;
  }
}

export default { searchRepositoriesByName, fetchAuthorInfo };
