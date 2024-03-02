import React, { useState, useRef } from "react";
import { Modal } from "antd";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import bflLogo from "../../assets/bfl-logo.png";
import avatar from "../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faMicrophone,
  faMicrophoneSlash,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import sender from "../../assets/send-2.svg";
import userImg from "../../assets/user.png";
import bg from "../../assets/bg.jpg";
import avatarLogo from "../../assets/avatar.png";
import ChatIcon from "../../assets/chat-frame.png";
import mainPic from "../../assets/mainPic.svg";
import { Image } from "antd";

const stepDescriptions = [
  "Please enter your 4-digit login PIN to proceed.",
  "Click 'Show Quick Balance' on the home page.",
  "Click on the available balance in the account.",
  "Click on the 'View Statement' on the overview page.",
];

const QuestionModal = ({
  selectedQuestion,
  closeModal,
  inputRef,
  sendMessage,
  handleNextClick,
  loading,
  micOn,
  setMicOn,
  micStart,
  setMicStart,
  startStopHandle,
  startStopRecording,
  messages,
  currentIndex,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const description = stepDescriptions[activeStep];
  const input = useRef();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // const sendMessage = (value = undefined) => {
  //   console.log("click", value);
  //   const text = input.current.value.length > 0 ? input.current.value : value;
  //   console.log(text);
  //   // setIsMuted(true)

  //   if (!text) {
  //     return;
  //   }

  //   if (micOn) {
  //     setMicOn(false);
  //     setMicStart(false);
  //     setStartStopRecording("stop");
  //   }

  //   if (!loading) {
  //     chat(text);
  //     input.current.value = "";
  //   }
  // };

  return (
    <Modal
      title={<h1 className="bg-[#ebf2ff] mt-2">{selectedQuestion}</h1>}
      visible={true}
      onCancel={closeModal}
      footer={null}
      wrapClassName="modal-wrapper"
      width={"704px"}
      style={{ top: "40px" }}
    >
      <div className="bg-[#ffffff] rounded-2xl lg:pb-7 lg:pt-0 p-7 ml-3  w-[650px] h-[400px] flex justify-center items-center mt-7">
        <div className="bg-[#ffffff] rounded-2xl border border-1 border-[#f0f0f0] p-5 flex items-center justify-center flex-col h-[364px]  w-[600px] mt-8">
          <HorizontalLinearStepper
            activeStep={activeStep}
            onChangeStep={handleStepChange}
          />
          <div className="bg-[#ffeded] border border-2 border-[#ffc3c3] rounded-2xl  p-4 mb-8  w-[560px] h-[350px]">
            {/* STEPPER SHOULD CHANGE THIS start */}

            <div className="flex flex-row  w-full">
              <p className="bg-[#ffc3c3] rounded-full h-10 w-10 flex items-center justify-center font-semibold -mt-1 -mt-1">
                {activeStep + 1}
              </p>
              <p className="text-sm mt-2 ml-3">
                Step {activeStep + 1}: {description}
              </p>
            </div>

            {/* STEPPER SHOULD CHANGE THIS End */}

            <hr class="w-[556px] border border-1 border-[#ffc3c3] mt-1 -ml-4"></hr>

            <div className="flex items-center justify-center flex-col">
              {/* mid content here */}
            </div>
          </div>
          <div className="flex flex-row -mt-5 -mb-3">
            <button className="w-[110px] rounded-3xl py-3 border border-[#ee1d23] bg-white text-[#ee1d23] mr-4">
              Back
            </button>
            <button className="w-[110px] rounded-3xl py-3 border border-[#ee1d23] bg-[#ee1d23] text-[#fff]">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] rounded-2xl lg:pb-7 lg:pt-0 p-7 ml-3  w-[650px] h-[350px] flex justify-center items-center mt-5">
        <div className="bg-[#ffffff] rounded-2xl border border-1 border-[#f0f0f0] pt-4 h-[310px]  w-[100%] mt-8 overflow-hidden">
          <p className="ml-5 text-black font-inter font-semibold text-lg leading-[157%]">
            Ask Me
          </p>
          <hr class="w-[593px] border border-1 border-[#f0f0f0] mt-3 "></hr>

          {/* list of messages */}
          <div className="overflow-y-auto lg:h-[62%] h-[77%] ">
            {messages.length > 0 ? (
              messages?.map((message, index) => {
                return (
                  <div key={index}>
                    {/* USER MSG */}
                    {message.sender === "user" ? (
                      <div className="flex flex-row -mt-1">
                        <div className="ml-4 mt-4 bg-[#ebebeb] rounded-full h-10 w-10 flex flex-row items-center justify-center">
                          <img src={bflLogo} alt="logo" className="w-6 h-6" />
                        </div>
                        <p className="mt-6 ml-4 font-inter font-semibold text-base leading-[157%] text-black">
                          {message.text}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#faf0f0]  rounded-2xl  p-4 ml-4 mt-3  w-[560px] h-[90px] flex flex-row">
                        <div>
                          <div className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] bg-[#FFD2D2] rounded-full flex items-center justify-center">
                            <img src={avatarLogo} alt="chat avatar image" />
                          </div>
                        </div>

                        {message.type === "list" ? (
                          <div>
                            {message.list.map((msg, index) => {
                              return (
                                index <= currentIndex && (
                                  <div key={index}>
                                    <p className="w-full flex items-center py-2">
                                      {msg.step}
                                    </p>
                                    {msg.image && (
                                      <div className=" w-[60%] h-[100%] mb-3 mt-4">
                                        <Image
                                          width={"50%"}
                                          src={`data:image/png;base64, ${msg.image}`}
                                          alt={"result image"}
                                        />
                                      </div>
                                    )}
                                  </div>
                                )
                              );
                            })}
                            {message.list.length - 1 <= currentIndex ? null : (
                              <button
                                className="text-white bg-btn-color rounded-full font-semibold px-2.5 py-1.5 mt-1.5"
                                onClick={() =>
                                  handleNextClick(message.list.length)
                                }
                              >
                                Next step
                                <FontAwesomeIcon
                                  icon={faForward}
                                  size="1x"
                                  className="ml-4 "
                                />
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <p className="text-[#2C2A2B] font-inter text-sm font-light mt-5 ml-3">
                              {message.text}
                            </p>

                            {/* REPLY CHAT BUTTON START */}
                            {/* <div className="flex flex-row mt-3 -mb-3">
                              <button className="w-[62px] h-[37px] rounded-lg py-0 border border-[#ee1d23] bg-[#faf0f0] text-[#ee1d23] mr-4">
                                No
                              </button>
                              <button className="w-[62px] h-[37px] rounded-lg py-0 border border-[#ee1d23] bg-[#ee1d23] text-[#fff]">
                                Yesll
                              </button>
                            </div> */}
                            {/* REPLY CHAT BUTTON END */}

                            {message.image && (
                              <div className=" w-[60%] h-[100%] mb-3 mt-4 ">
                                <Image
                                  width={"50%"}
                                  src={bg}
                                  alt={`data:image/png;base64, ${message.image}`}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center items-center h-full ">
                <img
                  src={mainPic}
                  alt="chat icon"
                  className="sm:w-[60%] sm:h-[100%] mb-4 "
                />
              </div>
            )}

           
          </div>

          {/* SEND INPUT BOX IN MAIN PAGE */}

          <div className="flex rounded-3xl bg-[#F3F3F3] text-[#9B9B9B] lg:p-4 p-4 absolute ml-4  w-[560px] h-[60px] m-4 mt-1">
            <input
              ref={inputRef}
              placeholder="Ask or search anything"
              className="w-full bg-[#F3F3F3] text-btn-color rounded-3xl p-1 focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <div className="flex gap-4">
              {micStart ? (
                // /* //stop the recording */
                <button
                  id="voice-stop-button"
                  // disabled={micOn}
                  onClick={() => startStopHandle(!startStopRecording)}
                  className={`text-white bg-btn-color w-[37px] h-[37px] rounded-full font-semibold`}
                  // loading || micOn ? "cursor-not-allowed opacity-30" : ""
                >
                  <FontAwesomeIcon icon={faMicrophone} />
                </button>
              ) : (
                <button
                  id="voice-typing-button"
                  // disabled={micOn}
                  onClick={() => {
                    setMicOn((prev) => !prev);
                    setMicStart(!micStart);
                  }}
                  className={`text-white bg-btn-color w-[37px] h-[37px] rounded-full font-semibold
                    ${loading || micOn ? "cursor-not-allowed opacity-30" : ""}`}
                >
                  {/* MicrophoneIcon integrated into the button */}
                  <FontAwesomeIcon icon={faMicrophoneSlash} />
                </button>
              )}
              <button
                // disabled={micOn}
                onClick={() => sendMessage()}
                className={`text-white bg-btn-color w-[37px] h-[37px] flex items-center justify-center rounded-full font-semibold first-letter 
                        ${loading ? "cursor-not-allowed opacity-30" : ""}
                    `}
              >
                <img src={sender} alt="sender btn" />
              </button>
            </div>
          </div>

          {/* SEND INPUT BOX IN MAIN PAGE */}
        </div>
      </div>
    </Modal>
  );
};

export default QuestionModal;
