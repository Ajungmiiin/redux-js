import { createStore } from "./redux/createStore";

const reducer = (state = { number: 0 }, action) => {
  if (action.type === "increase") {
    return { ...state, number: state.number + 1 };
  }

  if (action.type === "decrease") {
    return { ...state, number: state.number - 1 };
  }

  if (action.type === "set") {
    return { ...state, number: 0 };
  }

  return state;
};

function App() {
  const store = createStore(reducer);

  const subscribeFunction = () => {
    console.log("상태가 변경되었습니다 !");
  };

  const addCount = () => {
    store.dispatch({ type: "increase" });
  };

  const decreaseCount = () => {
    store.dispatch({ type: "decrease" });
  };

  const setNumber = () => {
    store.dispatch({ type: "set", payload: 0 });
  };

  const getCurrentState = () => {
    const currentState = store.getState();
    console.log("currentState : ", currentState);
  };

  const subscribeHandler = () => {
    store.subscribe(subscribeFunction);
  };

  const unSubscribeHandler = () => {
    store.unSubscribe(subscribeFunction);
  };
  return (
    <>
      <main className="container">
        <p className="desc">
          F12를 눌러 <span>콘솔</span>을 확인해주세요.
        </p>

        <section>
          <p>Dispatch</p>

          <div className="button-wrap dispatch">
            <button onClick={addCount}>더하기</button>
            <button onClick={decreaseCount}>빼기</button>
            <button onClick={setNumber}>숫자 초기화</button>
          </div>
        </section>

        <section>
          <p>Subscribe</p>
          <div className="button-wrap subscribe">
            <button onClick={subscribeHandler}>현재 상태 구독하기</button>
            <button onClick={unSubscribeHandler}>구독 취소하기</button>
          </div>
        </section>

        <section>
          <p>About</p>
          <div className="button-wrap about">
            <button onClick={getCurrentState}>현재 숫자 가져오기</button>
            <button onClick={() => console.clear()}>콘솔 비우기</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
