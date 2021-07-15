import fs from 'fs'

// fs.readdir((err, files) => {
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     if(file.includes('.vue')) export  from `${file}`
//   }
// })
/* eslint-disable import/prefer-default-export */
export { default as Sample } from './Sample.vue';
export { default as Input } from './Input.vue';
export { default as Button } from './Button.vue';
export { default as Tooltip } from './Tooltip.vue';
export { default as Switch } from './Switch.vue';
export { default as Notification } from './Notification.vue';
