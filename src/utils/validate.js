
// 过滤特殊字符

export function stripscript(str) {
    let pattern = new RegExp("[`~!@#$^");
    let rs = "";

    for (let i = 0;i < str.length; i++){
        rs = rs + str.substr(i,1).replace(pattern,'')
    }

    return rs;
}
// 验证邮箱
export function validateEmail(value){
      let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
      return !reg.test(value);
}

//验证密码
export function validatePass(value){
    let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/;
    return !reg.test(value);
}

// 验证验证码
export function validateCode(value){
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value);
}