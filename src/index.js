import './style.scss';
import { Menu } from './menu';
import { Contact } from './contact';

const wrapper = document.getElementById('content');
const banner = document.createElement('div');
const header = document.createElement('h1');
const tabInner = document.createElement('div');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

let menuTitles = ['Filet Migñon', 'Orange Chicken', 'Fish Sticks'];
let menuImages = [];
let menuDes = ['Tender beef wrapped in bacon mmmmm BACON', 'A sweet classic with the zest of orange', 'Oi thats a british classic!']



header.innerText = 'Welcome';
header.className = 'header';
banner.className = 'banner';
banner.appendChild(header);

menuBtn.className = 'menu-btn';
menuBtn.innerText = 'Menu';
contactBtn.className = 'contact-btn';
contactBtn.innerText = 'Contact';

tabInner.className = 'tab-content';

function tabContent(value){
  tabInner.innerHTML = '';
  if(value == 'menu'){
    for(let i = 0; i < menuTitles.length; i++){
      const menu1 = new Menu('image', menuTitles[i], menuDes[i]);
      tabInner.appendChild(menu1.content);
    }
  }else if(value == 'contact'){
    const contac1 = new Contact('2Good','Order before we run out!');
    tabInner.appendChild(contac1.content);
  }
}

menuBtn.addEventListener('onclick', tabContent('menu'));
contactBtn.addEventListener('onclick', tabContent('contact'));

window.addEventListener('load', () => {
  wrapper.appendChild(banner);
  wrapper.appendChild(menuBtn);
  wrapper.appendChild(contactBtn);
  tabContent('menu');
  wrapper.appendChild(tabInner);
});

// es6 switch

if (module.hot) {
  module.hot.accept()
}