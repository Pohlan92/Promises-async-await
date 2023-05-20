// import './css/style.css';
import starter from './js/modules/app.js';


async function check () {
  const result = await starter()
  
  console.log('log', result)
}


window.onload = () => {
  check()
  
}


