import React, { useState, useEffect } from "react";
import _ from "lodash"; // Lodash 전체 import (비효율적)
import moment from "moment"; // Moment.js 전체 import (용량 큼)
import * as THREE from "three"; // three.js (3D 라이브러리, 번들 크기 증가)

function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    // Lodash 사용 (전체 import하므로 불필요한 코드도 포함됨)
    const numbers = _.range(0, 100000);
    setRandomNumbers(_.shuffle(numbers));

    // Moment.js 사용
    console.log("Current Time:", moment().format("YYYY-MM-DD HH:mm:ss"));

    // Three.js 사용
    const scene = new THREE.Scene();
    console.log("Three.js Scene:", scene);
  }, []);

  return (
    <div>
      <h1>Heavy Bundle Example</h1>
      <p>Random Numbers: {randomNumbers.slice(0, 10).join(", ")}</p>
    </div>
  );
}

export default App;
