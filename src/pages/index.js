import TrPortal from "@/components/portal";
import ReactConfetti from "react-confetti";
import WheelComponent from "react-wheel-of-prizes";
import { useState } from "react";

import IMAGES from "@/assets";
import { RadioGroup } from "@/components/radio-group";
import Image from "next/image";
import { TypeRadioGroup } from "@/components/type-radio-group";

const segments = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const [prize, setPrize] = useState("100000");
  const [isChair, setIsChair] = useState(0);
  const [state, setState] = useState({ portal: "", show: "" });
  shuffleArray(segments);
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

  const onFinished = (winner) => {
    const newArray = [...segments];
    shuffleArray(newArray);
    setFilteredSegment(newArray);
    setState({ portal: false, show: winner });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
        paddingBottom: "150px",
        height: "100vh",
        marginTop: 30,
      }}
    >
      {state.show && <ReactConfetti width={2000} height={"2000"} />}
      {/* <div style={{ display: "flex", gap: 100 }}>
        <TypeRadioGroup isChair={isChair} setIsChair={setIsChair} />
      </div> */}
      <div className="flex">
        <div style={{ marginTop: 100 }}>
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
            upDuration={500}
            downDuration={600}
            fontFamily="Arial"
            width={"100%"}
            fontSize={100}
          />
        </div>
        <div className="flex flex-col" >
          <TypeRadioGroup isChair={isChair} setIsChair={setIsChair} />
          <RadioGroup prize={prize} setPrize={setPrize} />
        </div>
      </div>
      {state.portal ? <TrPortal /> : null}
      {state.show && (
        // modal
        <div className="box">
          <div className="imageBox">
            {isChair === 0 && (
              <Image
                src="/table.png"
                alt="prize"
                width={500}
                height={370}
                objectFit="contain"
              />
            )}
            {isChair === 1 && (
              <Image
                src={IMAGES[`image${prize.slice(0, 3)}`]?.src}
                alt="prize"
                width={550}
                height={300}
                objectFit="contain"
              />
            )}
          </div>
          <h2 className="titleWin">
            {isChair === 0 ? "ШИРЭЭ" : "СУУДАЛ"} {"   "}
            <span style={{ fontSize: 50, color: "#bc13fe" }}>{state.show}</span>
            <br />
            <br />
            {isChair === 1 && (
              <span style={{ fontSize: 50, marginTop: 30 }}>
                {convert(prize)}₮
              </span>
            )}
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
