import _ from 'lodash';

import './style.css';

import './reset.less';

import printMe from './print.js';

import Icon from './icon.jpg';

printMe();

function component() {
  var element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['您好', 'webpack'], ' ');

  var myIcon = new Image();
  myIcon.src = Icon;
  
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild( component() );