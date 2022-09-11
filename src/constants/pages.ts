import About from '../components/pages/About';
import Blog from '../components/pages/Blog';
import Experience from '../components/pages/Experience';
import Home from '../components/pages/Home';

import { Colors } from '../styles/Colors';

const pages = {
  home: {
    name: 'Orion Hall',
    component: Home,
    background: Colors.niceBlue,
  },
  about: {
    name: 'About',
    component: About,
  },
  experience: {
    name: 'Experience',
    component: Experience,
  },
  blog: {
    name: 'Blog',
    component: Blog,
  },
};

export default pages;
