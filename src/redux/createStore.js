export const createStore = (reducer) => {
  // 현재 상태
  let currentState;

  //   현재 구독하고있는 함수들
  let currentListeners = [];

  const subscribe = (listener) => {
    // subscribe ?
    // dispatch 를 하고나면 실행 될 콜백함수

    // currnetListeners 배열에 push
    console.log("상태가 구독되었습니다.");
    currentListeners.push(listener);
  };

  const unSubscribe = (listener) => {
    console.log("구독을 취소했습니다.");
    currentListeners = currentListeners.filter((l) => l !== listener);
  };

  const dispatch = (action) => {
    // 1. 사용자로부터 받은 action 객체를 reducer로 전달
    // 2. dispatch로부터 받은 action 객체를 reducer에서 action.type에 맞게 state를 업데이트 후 리턴
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
    console.log("state :", currentState);
  };

  //   dispatch에 빈 객체를 전달하여 state를 초기화 시킴
  dispatch({});

  // 현재 state를 가져오는 get 함수
  const getState = () => currentState;

  return {
    subscribe,
    dispatch,
    getState,
    unSubscribe,
  };
};
