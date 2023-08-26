import React, { useState, useEffect } from "react";
import q from "../../../assets/drinks/q.jpg";
import m1 from "../../../assets/drinks/1.jpg";
import m2 from "../../../assets/drinks/2.jpg";
import m3 from "../../../assets/drinks/3.jpg";
import m4 from "../../../assets/drinks/4.jpg";
import m5 from "../../../assets/drinks/5.jpg";
import m6 from "../../../assets/drinks/6.jpg";
import m7 from "../../../assets/drinks/7.jpg";
import m8 from "../../../assets/drinks/8.jpeg";
import m9 from "../../../assets/drinks/9.jpg";
import m10 from "../../../assets/drinks/10.jpg";

import "../game.css";
import Pic from "../Pic";

const Level4 = ({ setLevel, score, setScore }) => {
  const [clicked, setClicked] = useState();
  const [flipped, setFlipped] = useState([]);
  const [hideImg1, setHideImg1] = useState("");
  const [hideImg2, setHideImg2] = useState("");
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAll(false);
    }, 2000);
  }, []);
  const flipImg = (m) => {
    setClicked(m);
    flipped.push(m);
  };
  useEffect(() => {
    if (
      flipped[flipped.length - 1] === flipped[flipped.length - 2] + "0" ||
      flipped[flipped.length - 1] + "0" === flipped[flipped.length - 2]
    ) {
      setScore(score + 20);
      setHideImg1(flipped[flipped.length - 1]);
      setHideImg2(flipped[flipped.length - 2]);
    }
    // console.log(hideImg);
  }, [flipped, clicked]);
  useEffect(() => {
    if (score >= 390) setLevel(5);
    else setLevel(4);
  }, [score]);
  return (
    <>
      <h1>
        Level <span style={{ color: "red" }}>4</span>
      </h1>
      <div className="d-flex align-items-center flex-column">
        <h1>
          Score <span style={{ color: "red" }}>{score}</span>
        </h1>
        <div className="d-flex game-area" style={{width:"350px"}}>
          <Pic
            src={showAll ? m1 : clicked == "m1" ? m1 : q}
            imgClick={() => flipImg("m1")}
            imgStyle={{
              visibility:
                hideImg1 === "m1" || hideImg2 === "m1" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m10 : clicked == "m10000" ? m10 : q}
            imgClick={() => flipImg("m10000")}
            imgStyle={{
              visibility:
                hideImg1 === "m10000" || hideImg2 === "m10000" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m2 : clicked == "m2" ? m2 : q}
            imgClick={() => flipImg("m2")}
            imgStyle={{
              visibility:
                hideImg1 === "m2" || hideImg2 === "m2" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m3 : clicked == "m3" ? m3 : q}
            imgClick={() => flipImg("m3")}
            imgStyle={{
              visibility:
                hideImg1 === "m3" || hideImg2 === "m3" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m9 : clicked == "m90" ? m9 : q}
            imgClick={() => flipImg("m90")}
            imgStyle={{
              visibility:
                hideImg1 === "m90" || hideImg2 === "m90" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m1 : clicked == "m10" ? m1 : q}
            imgClick={() => flipImg("m10")}
            imgStyle={{
              visibility:
                hideImg1 === "m10" || hideImg2 === "m10" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m4 : clicked == "m4" ? m4 : q}
            imgClick={() => flipImg("m4")}
            imgStyle={{
              visibility:
                hideImg1 === "m4" || hideImg2 === "m4" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m5 : clicked == "m5" ? m5 : q}
            imgClick={() => flipImg("m5")}
            imgStyle={{
              visibility:
                hideImg1 === "m5" || hideImg2 === "m5" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m9 : clicked == "m9" ? m9 : q}
            imgClick={() => flipImg("m9")}
            imgStyle={{
              visibility:
                hideImg1 === "m9" || hideImg2 === "m9" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m3 : clicked == "m30" ? m3 : q}
            imgClick={() => flipImg("m30")}
            imgStyle={{
              visibility:
                hideImg1 === "m30" || hideImg2 === "m30" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m5 : clicked == "m50" ? m5 : q}
            imgClick={() => flipImg("m50")}
            imgStyle={{
              visibility:
                hideImg1 === "m50" || hideImg2 === "m50" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m6 : clicked == "m6" ? m6 : q}
            imgClick={() => flipImg("m6")}
            imgStyle={{
              visibility:
                hideImg1 === "m6" || hideImg2 === "m6" ? "hidden" : "s",
            }}
          />{" "}
          <Pic
            src={showAll ? m10 : clicked == "m1000" ? m10 : q}
            imgClick={() => flipImg("m1000")}
            imgStyle={{
              visibility:
                hideImg1 === "m1000" || hideImg2 === "m1000" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m2 : clicked == "m20" ? m2 : q}
            imgClick={() => flipImg("m20")}
            imgStyle={{
              visibility:
                hideImg1 === "m20" || hideImg2 === "m20" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m7 : clicked == "m7" ? m7 : q}
            imgClick={() => flipImg("m7")}
            imgStyle={{
              visibility:
                hideImg1 === "m7" || hideImg2 === "m7" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m4 : clicked == "m40" ? m4 : q}
            imgClick={() => flipImg("m40")}
            imgStyle={{
              visibility:
                hideImg1 === "m40" || hideImg2 === "m40" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m8 : clicked == "m8" ? m8 : q}
            imgClick={() => flipImg("m8")}
            imgStyle={{
              visibility:
                hideImg1 === "m8" || hideImg2 === "m8" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m6 : clicked == "m60" ? m6 : q}
            imgClick={() => flipImg("m60")}
            imgStyle={{
              visibility:
                hideImg1 === "m60" || hideImg2 === "m60" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m7 : clicked == "m70" ? m7 : q}
            imgClick={() => flipImg("m70")}
            imgStyle={{
              visibility:
                hideImg1 === "m70" || hideImg2 === "m70" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m8 : clicked == "m80" ? m8 : q}
            imgClick={() => flipImg("m80")}
            imgStyle={{
              visibility:
                hideImg1 === "m80" || hideImg2 === "m80" ? "hidden" : "s",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Level4;
