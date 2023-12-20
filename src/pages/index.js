import TrPortal from "@/components/portal";
import ReactConfetti from "react-confetti";
import WheelComponent from "react-wheel-of-prizes";
import { useState } from "react";

import IMAGES from "@/assets";
import { RadioGroup } from "@/components/radio-group";
import Image from "next/image";

const segments = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const [prize, setPrize] = useState("100000");
  const [state, setState] = useState({ portal: "", show: "" });
  shuffleArray(segments);
  const [filteredSegment, setFilteredSegment] = useState(segments);
  console.log(filteredSegment);
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

  const onFinished = (winner) => {
    const newArray = [...segments];
    shuffleArray(newArray);
    setFilteredSegment(newArray);
    setState({ portal: false, show: winner });
  };
  console.log(filteredSegment);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
        paddingBottom: "150px",
        background: `url(${IMAGES.background.src})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {state.show && <ReactConfetti width={2000} height={"2000"} />}
      <RadioGroup prize={prize} setPrize={setPrize} />
      <div className="flex">
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
          width={"100%"}
        />
        <Image
          src={IMAGES.image7.src}
          width={200}
          height={200}
          alt="prize"
          style={{ marginLeft: -300 }}
        />
      </div>
      {state.portal ? <TrPortal /> : null}
      {state.show && (
        // modal
        <div className="box">
          <div className="imageBox">
            <Image
              src={IMAGES[`image${state.show}`]?.src}
              alt="prize"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
          <h2 className="titleWin">
            САНДАЛ {"   "}
            <span style={{ fontSize: 50 }}>{state.show}</span>
            <br />
            <br />
            <span style={{ fontSize: 50, marginTop: 30 }}>
              {convert(prize)}₮
            </span>{" "}
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

const convert = (value) => {
  return value.slice(0, -3) + `'000`;
};
