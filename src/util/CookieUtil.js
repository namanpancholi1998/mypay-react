import { decryptor } from "./Encryptor";

export function getProfile(cookies) {
  const token = cookies.token;
  const userName = decryptor(token.split("-")[1]);
  const users = cookies.users;
  console.log(userName);
  console.log(users);

  const user = users.filter((user) => {
    if (user.name === userName) {
      return true;
    }
    return false;
  });
  console.log(user);

  return user[0];
}

export function updateUserBalance(cookies, userId, newBalance) {
  const users = cookies.users || [];
  const userIndex = users.findIndex((user) => user.name === userId);

  if (userIndex !== -1) {
    users[userIndex].balance = newBalance;
    return cookies.users;
  } else {
    console.error("User not found in the cookie");
    return cookies.users;
  }
}

export function checkToken(cookies) {
  let userName;
  if (cookies.token !== undefined && cookies.token !== "") {
    userName = cookies.token.split("-")[1]; // here taking userName form Cookies
    if (cookies.token === `mypay-${userName}-mypay`) {
      // checking is cookies is in correct formate?
      return true;
    }
  }

  return false;
}

// let user = getProfile(cookies);
// let newBalance = (user.balance = window.localStorage.getItem("balance"));
