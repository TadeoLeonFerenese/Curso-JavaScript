// <------------Mapper ------------->
//Todo: Un mapper es una function que recibe nuestro objeto o algo que luzca como obj y genera una insancia

import { User } from "../models/user";

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {User}
 */
export const localHostUserToModel = (localhostUser) => {
  const { id, isActive, balance, avatar, first_name, last_name, gender } =
    localhostUser;

  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender,
  });
};
