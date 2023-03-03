// <------------Mapper ------------->
//Todo: Un mapper es una function que recibe nuestro objeto o algo que luzca como obj y genera una insancia

import { User } from "../models/user";

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
  const { avatar, balance, first_name, gender, id, isActive, last_name } =
    localhostUser;

  return new User({
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  });
};
