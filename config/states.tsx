import { Home, Profile } from '../src/pages';

const home = {
  name: 'home',
  url: '/',
  component: Home,
};

const profile = {
  name: 'profile',
  url: '/profile?query&page',
  component: Profile,
};

const states = [home, profile];
export default states;
