import {  useState } from "react";

const useFoods = () => {
    const [foods, setFoods] = useState([]);
  
    return foods
};

export default useFoods;