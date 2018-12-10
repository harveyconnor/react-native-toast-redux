export const types = {
  SHOW: '@@TOAST/SHOW',
  HIDE: '@@TOAST/HIDE'
};

const toastAction = (message: string | React.ReactNode, duration: number, type: string) => ({
  type,
  payload: {
    message,
    duration
  }
});

export const actionCreators = {
  hide() {
    return {
      type: types.HIDE,
      payload: {}
    };
  },
  show(message: string | React.ReactNode, duration: number = 5000) {
    return toastAction(message, duration, types.SHOW);
  }
};
