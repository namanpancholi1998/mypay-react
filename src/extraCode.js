// put all services in one folder

// Data of Cookies
// users %5B%7B%22name%22%3A%22naman%22%2C%22email%22%3A%22naman%22%2C%22password%22%3A%2212345%22%2C%22balance%22%3A450%7D%2C%7B%22name%22%3A%22admin%22%2C%22email%22%3A%22admin%22%2C%22password%22%3A%22admin%22%2C%22balance%22%3A5600%7D%5D

// const userExists = users.some(
//   (user) => user.email === email && user.password === password
// );
// console.log(userExists);

// if (userExists) {
//   console.log("User authenticated");
// } else {
//   console.log("User not found");
// }

// const isLogedIn = users.some(
//   (user) => user.email === email && user.password === password
// );

// const users = [
//   {
//     userName: "naman",
//     password: "12345",
//   },
//   {
//     userName: "admin",
//     password: "admin",
//   },
// ];

//

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

const MyApp = () => {
  const [name, setName] = useLocalStorage("name", "John");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
};
