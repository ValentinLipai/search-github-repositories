import { showNotification } from 'Helpers/helpers';

export async function searchRepositoriesByName(query: string, page: number, perPage: number) {
  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`);
    return {
      code: response.status,
      data: await response.json(),
    };
  } catch (error) {
    showNotification('danger', 'Error!', `Error fetching repositories. Message: ${error}`);
    return null;
  }
}

export async function fetchAuthorInfo(profile: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${profile}`);
    return await response.json();
  } catch (error) {
    showNotification('danger', 'Error!', `Error fetching profile info. Message: ${error}`);
    return null;
  }
}

export default { searchRepositoriesByName, fetchAuthorInfo };
