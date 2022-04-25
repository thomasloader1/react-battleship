export const SET_USERNAME = "SET_USERNAME";
export const setUsernameAction = (name) => ({
  type: SET_USERNAME,
  payload: name
});

export const SET_PLAYER_SHIP = "SET_PLAYER_SHIP";
export const setPlayerShipAction = (payload) => ({
  type: SET_PLAYER_SHIP,
  ...payload
});
