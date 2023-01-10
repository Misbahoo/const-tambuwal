import { useState, useEffect } from "react";

import { englishQuestions } from "../../questions/englishQ";
import Buttons from "../buttons";
import QuestionJumper from "./questionJumper";
import GetAnswers from "../getAswers";

const English = () => {
  const [examFinished, setExamFinished] = useState(3);
  const [input, setInputs] = useState({});
  const [selected, setSelected] = useState({});
  const [allSelected, setAllSelected] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  var index1 = 0;

  const handleChange = (e: any) => {
    const { value, name } = e.target;

    const numbers = /\d+/g;
    const currentArrayIndex = name.match(numbers)[0];
    setInputs({ ...input, [name]: value });

    setSelected({ ...selected, [name]: true });

    const submittedKeys = Object.keys(selected);

    const checkSelelction = submittedKeys.filter(
      (key, index) => (selected as any)[key] === true
    );

    if (checkSelelction.length + 1 >= 10) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    localStorage.setItem("englishSubmitted", "true");
    localStorage.setItem("englishAnswers", JSON.stringify(input));
  };

  const [theValue, setTheValue] = useState({ first: 1 });
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);

  const KeyDownEventListener = (e: any) => {
    if (e.code == "ArrowRight") nextButton(e);
    if (e.code == "ArrowLeft") prevButton(e);
  };

  useEffect(() => {
    document.body.addEventListener("keydown", KeyDownEventListener);
    return () => {
      document.body.removeEventListener("keydown", KeyDownEventListener);
    };
  }, [theValue.first]);

  //next button functionality
  function nextButton(e: any) {
    e.preventDefault();
    setDisablePrev(false);

    //stops increamenting first and second values when the number exceeds the questions
    if (!(theValue.first === 10)) {
      setTheValue({ ...theValue, first: theValue.first + 1 });
      // document.documentElement.scrollTop = 0;
    }

    //set values for enabling submit and disenabling next buttons
    if (theValue.first >= 9) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }

    //enable previous button
    if (theValue.first >= 1) {
      setDisablePrev(false);
    }
  } //end of next function

  function prevButton(e: any) {
    e.preventDefault();

    //set values for disenabling submit and enabling next buttons
    setDisableNext(false);

    //stops decreament when first and second values are less than or equals 0
    if (!(theValue.first <= 1)) {
      setTheValue({ ...theValue, first: theValue.first - 1 });
    }

    //disabling the previous button
    if (theValue.first <= 2) {
      setDisablePrev(true);
    }

    //enabling next buttons
    if (theValue.first <= 10) {
      setDisableNext(false);
    }
  }

  if (submitted) {
    <GetAnswers />;
  }

  return (
    <>
      <div className="bg-gray-200 mx-auto my-10 w-3/4 p-10 shadow-sm shadow-gray-600 rounded-lg">
        <div className="mb-5 p-3 bg-gray-700 rounded-lg">
          <p className="uppercase font-bold mb-3 text-white">
            Examination: Use of English
          </p>
          <p className="italic text-white mb-3">
            Please read the questions carefully and select the correct answer
            before you move to the next question
          </p>
          <span className="uppercase font-bold text-white">Note:</span>{" "}
          <span className="italic text-white">
            You can only select one answer for each question
          </span>
        </div>
        <form onSubmit={submit}>
          {englishQuestions.map((item) => {
            index1 = index1 + 1;
            return (
              <div
                key={index1}
                className={index1 === theValue.first ? "" : "hidden"}
              >
                <h3>
                  <span className={submitted ? "text-gray-400" : "font-bold"}>
                    Q {index1}:
                  </span>{" "}
                  {item.start} <span className="underline">{item.theWord}</span>{" "}
                  {item.end}
                </h3>
                {item.options.map((item, index) => {
                  return (
                    <div className="mb-3" key={index}>
                      <label htmlFor="">a: </label>
                      <input
                        type="radio"
                        name={`englishQ${index1}`}
                        value={item.a}
                        onChange={handleChange}
                        disabled={submitted ? true : false}
                      />
                      <label htmlFor=""> {item.a}</label>
                      <br />

                      <label htmlFor="">b: </label>
                      <input
                        type="radio"
                        name={`englishQ${index1}`}
                        value={item.b}
                        onChange={handleChange}
                        disabled={submitted ? true : false}
                      />
                      <label htmlFor=""> {item.b}</label>
                      <br />

                      <label htmlFor="">c: </label>
                      <input
                        type="radio"
                        name={`englishQ${index1}`}
                        value={item.c}
                        onChange={handleChange}
                        disabled={submitted ? true : false}
                      />
                      <label htmlFor=""> {item.c}</label>
                      <br />

                      <label htmlFor="">d: </label>
                      <input
                        type="radio"
                        name={`englishQ${index1}`}
                        value={item.d}
                        onChange={handleChange}
                        disabled={submitted ? true : false}
                      />
                      <label htmlFor=""> {item.d}</label>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {allSelected ? (
            <div className="flex justify-center">
              <button
                type="submit"
                name="submit"
                className="w-2/4 btn bg-green-500 text-white hover:bg-gray-700 mx-auto cursor-pointer"
              >
                Submit
              </button>
            </div>
          ) : (
            ""
          )}
        </form>

        <Buttons
          states={{ disableNext, disablePrev }}
          prev_next_buttons={{ prevButton, nextButton }}
        />
        <QuestionJumper
          states={{ setDisableNext, setDisablePrev, setTheValue }}
          theValue={theValue}
          selected={selected}
        />

        <div>
          <p className="text-gray-600 text-center italic">
            You cannot change your answer after you have submitted your form.
          </p>
        </div>
      </div>
    </>
  );
};

export default English;
