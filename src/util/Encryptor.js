export function encryptor(userName) {
  console.log(userName);
  let token = "";

  for (let i = 0; i < userName.length; i++) {
    let charCode = userName.charCodeAt(i);
    if (charCode === 122) {
      token += String.fromCharCode(97);
    } else {
      token += String.fromCharCode(charCode + 8);
    }
  }
  return token;
}

export function decryptor(tokenValue) {
  let userName = "";

  for (let i = 0; i < tokenValue.length; i++) {
    let charCode = tokenValue.charCodeAt(i);
    if (charCode === 97) {
      userName += String.fromCharCode(122);
    } else {
      userName += String.fromCharCode(charCode - 8);
    }
  }
  return userName;
}
