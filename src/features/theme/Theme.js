
import {  useDispatch, useSelector } from "react-redux";
import { themeColorSet } from "./themeSlice";
export default function Theme() {
  const color = useSelector((state) => state.themeColor.value);
  const dispatch = useDispatch();
    // const [color, setColor] = useState("white")
  return (
    <div >
        <input className="textbox" type="text" onChange={(e)=>{dispatch(themeColorSet(e.target.value))}} />
        
      <button className="button"  onClick={()=>{dispatch(themeColorSet(color))}}>Change color </button>
    </div>
  );
}
