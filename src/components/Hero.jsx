import React, {useState} from 'react'
import gptlogo from "../assets/chatgpt.svg";
import plusSign from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import homeIcon from "../assets/home.svg";
import savedIcon from "../assets/bookmark.svg";
import upgradeIcon from "../assets/rocket.svg";
import sendBtn from "../assets/send.svg";
import userLogo from "../assets/user-logo.png";
import gptImgLogo from "../assets/chatgptLogo.svg";



function Hero() {
  const [dark, setDark] = useState("Switch light mode");
  
  const handleChangeDarkMode = () => {
    setDark("Switch Dark Mode");
  
  };
  return (
    <>
       <div className="App flex font-poppin">
      <div className="sidebar ">
        <div className="upperSide w-80 h-[470px] px-8 py-6">
          <div className="upperSideTop flex gap-4 items-center cursor-pointer">
            <img src={gptlogo} alt="" className="logo" />
            <span className="brand text-white text-2xl hover:text-gray-200">
              ChatGPT
            </span>
          </div>
          <button className="midbtn flex  justify-center items-center gap-2 rounded-md  mt-5 bg-indigo-600 text-white ">
            <img src={plusSign} alt="" className="addbtn " />
            New Chat
          </button>
          <div className="upperSideBottom mt-8 text-white  ">
            <button className="query gap-4 ">
              <img src={msgIcon} alt="" />
              What is Programming ?
            </button>
            <button className="query gap-4 ">
              <img src={msgIcon} alt="" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide  text-white px-12 py-2 cursor-pointer">
          <div className="topline"></div>
          <div className="listItem gap-4">
            <img src={homeIcon} alt="" className="listItemImg " />
            Home
          </div>
          <div className="listItem gap-4">
            <img src={savedIcon} alt="" className="listItemImg" />
            Saved
          </div>
          <div className="listItem gap-4">
            <img src={upgradeIcon} alt="" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main relative min-h-56 flex flex-col my-16 mx-40 text-white mb-0 font-poppin">
        <div className="modeChange flex items-center gap-2 absolute left-[600px] -top-8">
          {/* <span  className='font-bold text-gray-300'>DarkMode</span><input onClick={handleChangeDarkMode()} type="checkbox" /> */}
          <button
            type="button"
            onClick={() => handleChangeDarkMode()}
            className="bg-[#000000] text-[#ffffff] p-4 rounded"
          >
            {dark}
          </button>
        </div>
        <div className="chats overflow-hidden  overflow-y-scroll overflow-y-scroll-hidden scroll-smooth">
          <div className="chat">
            <img className="chatImg" src={userLogo} alt="" />
            <p className="txt">Write a content using Lorem 150 words ?</p>
          </div>
          <div className="chat bot">
            <img className="chatImg " src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus
              quae quibusdam harum, omnis facere nisi! Sequi eum debitis
              cupiditate veritatis quam voluptatem aliquid obcaecati distinctio,
              distinctio magni nostrum omnis natus voluptas maiores laborum
              consequatur molestiae deserunt quam quibusdam tempore odio quo.
              Eum, quia, nihil neque minima obcaecati, voluptates veritatis at
              eos quos in exercitationem expedita animi corrupti hic repudiandae
              aliquid nemo nobis praesentium quam distinctio. Facilis itaque
              ipsum placeat laboriosam et accusamus tenetur fuga repellat
              officia consequatur at vitae magni molestiae aut non, consectetur
              voluptas nulla? Sunt, modi nisi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nesciunt neque, deserunt inventore,
              dolore doloremque veniam rem, magni officia iusto facilis odit
              quod assumenda laboriosam? Quaerat iure voluptates est harum
              voluptate? Ratione sapiente dolores sit eveniet enim? Voluptatum
              inventore obcaecati magnam optio sed, provident aut sint ut dolor
              debitis ratione nostrum?{" "}
            </p>
          </div>
        </div>
        <div className="chatFooter mt-16 flex flex-col justify-center items-center">
          <div className="inp  flex items-center justify-between">
            <input type="text" placeholder="Send a messages" id="" />{" "}
            <button className="send">
              <img src={sendBtn} alt="send" className=" " />
            </button>
          </div>
          <p className="text-white text-sm">
            ChatGPT may produce inaccurate information about people,place or
            facts. HiraGPT Version2024@sasigroup
          </p>
        </div>
      </div>
    </div>     
    </>
  )
}

export default Hero
