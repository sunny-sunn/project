// export const name = '张三';
// export const age = 30;

// export function getAge(){
//   return 80;
// }

// export const getGender = function(){
//   return '女';
// }


// 不使用default
// export const math = {
//   add(a,b){
//     return a+b;
//   }
// }

export let name = '张三';
export let age = 30;
export let getAge = function(){
  return 100;
}

export default{
  add(a,b){
    return a+b;
  }
}