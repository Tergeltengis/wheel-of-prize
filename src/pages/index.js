import TrPortal from "@/components/portal";
import ReactConfetti from "react-confetti";
import WheelComponent from "react-wheel-of-prizes";
import { useState } from "react";

import IMAGES from "@/assets";

const segments = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function Home() {
  const [state, setState] = useState({ portal: "", show: "" });
  const [filteredSegment, setFilteredSegment] = useState(segments);

  const weelColors = () => {
    let arr = [];
    let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    segments.forEach((el) => {
      let color = colors.shift();
      arr.push(color);
      colors.push(color);
    });

    return arr;
  };
  const segColors = weelColors();

  // const rand = () => {
  //   return setTimeout(() => {
  //     return segments[Math.floor(Math.random() * segments.length)];
  //   }, 5000);
  // };
  const onFinished = (winner) => {
    setFilteredSegment((prev) => prev.filter((el) => el !== winner));
    setState({ portal: false, show: winner });
  };
  console.log(filteredSegment);
  return (
    <div
      // id="pankaj"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "150px",
        paddingBottom: "150px",
        background: `url(${IMAGES.background.src})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {state.show && <ReactConfetti width={2000} height={'2000'} />}
      <WheelComponent
        segments={filteredSegment}
        segColors={segColors}
        winningSegment={"no"}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="gray"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={290}
        upDuration={10}
        downDuration={10}
        fontFamily="Arial"
      />
      {state.portal ? <TrPortal /> : null}
      {state.show && (
        // modal
        <div className="box">
          <div className="imageBox">
            <img src={IMAGES[`image${state.show}`]?.src} alt="" />
          </div>
          <h2 className="titleWin">
            CONGRATULATIONS!!! YOU HAVE WON {state.show} !!!
          </h2>
          <div className="closeContainer">
            <button
              className="closepankaj"
              onClick={() => setState({ show: false })}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
