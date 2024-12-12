import { counterAtom } from "@jotai/atoms";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  // getter, setter를 모두 사용하기 때문에 모두 렌더링이 된다.
  // const [count, setCount] = useAtom(counterAtom);
  // const countUp = function(step) {
  //   setCount(count + step);
  // };

  // 불필요한 렌더링을 방지하기 위해 setter만 사용
  const setCount = useSetAtom(counterAtom);

  const countUp = function (step) {
    setCount((count) => count + step);
  };

  const countDown = function (step) {
    setCount((count) => count - step);
  };

  const reset = function () {
    setCount(0);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button
        onClick={() => {
          countDown;
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          reset;
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          countUp;
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
