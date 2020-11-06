import xswhite from './assets/samsara-logo/xs-white.png';
import htmlTag from './htmlTags';
import imgTag from './imageTag';

const nav = htmlTag('nav', 'nav', 'navbar');
const tabs = htmlTag('ul', 'top-menu', 'tabs');
const homeTab = imgTag(xswhite, 'homeTab', 'top-menu-item');
const contactTab = htmlTag('li', 'contactTab', 'top-menu-item');
const menuTab = htmlTag('li', 'menuTab', 'top-menu-item');

export default function navBar() {
  menuTab.textContent = 'MENU';
  contactTab.textContent = 'CONTACT';
  document.body.appendChild(nav);
  nav.appendChild(tabs);
  tabs.appendChild(menuTab);
  tabs.appendChild(homeTab);
  tabs.appendChild(contactTab);
}