import { Home, Profile, Search } from '../src/pages';

const home = {
  name: 'home',
  url: '/',
  component: Home,
};

const search = {
  name: 'search',
  url: '/search?query&page',
  component: Search,
};

const author = {
  name: 'author',
  url: '/author?authorName',
  component: Profile,
};

const states = [home, author, search];
export default states;
