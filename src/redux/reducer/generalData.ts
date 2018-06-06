import * as ActionType from '../actionType';

const data = {
  online: '0',
  captchaTime: 0
};

const generalData = (state = data, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.SET_ONLINE:
      return { ...state, online: action.payload.online };
    case ActionType.SET_CPATCHA_COUNTDOWN:
      return { ...state, captchaTime: action.payload };
    default:
      return state;
  }
};

export default generalData;

interface ActionTypes {
  type: string;
  payload: {
    online: string;
    captchaTime: number;
  };
}