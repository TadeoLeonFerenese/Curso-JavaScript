import { localHostUserToModel } from "../mapper/localhost-user.mapper";

/**
 *
 * @param {Numer} page
 * @returns
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  //TODO: En esta constante "users" se mapea un array y se retorna con una function arrow la instanciade la clase
  const users = data.map(localHostUserToModel);
  // console.log(users);
  return users;
};
