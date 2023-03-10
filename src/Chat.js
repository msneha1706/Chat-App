import React from "react";
import { useState } from "react";
import "./Chat.css";
import { BiMessageAltDetail, BiSearch } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { AiTwotoneEdit } from 'react-icons/ai';
import Chat1 from "./Chat1"



function Chat() {
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [fullName, setFullName] = useState("JoeAbraham");
  const [about, setAbout] = useState("Sleeping")
  const [edit, setEdit] = useState(false);
  const [edit1, setEdit1] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [search, setSearch] = useState(false)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOpenModal2 = () => {
    setIsOpen(false);
  };

  const editName = () => {
    setEdit(true);
  };

  const edit_name = (e) => {
    setFullName(e.target.value);
  };

  const handleOpenModal1 = () => {
    setIsOpen1(true);
  };

  const editName1 = () => {
    setEdit1(true);
  };

  const edit_name1 = (e) => {
    setAbout(e.target.value);
  };


  const result = () => {
    setShowResults(!showResults)
  }

  const disabled_edit = () => {
    setEdit(false)
    console.log("Abc")
  }

  const disabled_edit1 = () => {
    setEdit1(false)
    console.log("Abc")
  }

  //   const stop1 = () =>{
  //     setEdit1(false)
  //   }

  return (
    <div className="chat_container">
      <div className="chat">
        {isOpen ? (
          <div className="isopen">
            <div className="profile-name">
              <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" style={{ width: "40px", height: "40px", marginTop: "55px" }} onClick={handleOpenModal2} />
              <h1>Profile</h1>
            </div>
            <div className="profile_img">
              <img
                src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                alt=""
              />
            </div>
            <div className="profile_name">
              <p>Your Name</p>
              {!edit ? (
                <div className="profile_detail">
                  <h3>{fullName}</h3>
                  <AiTwotoneEdit onClick={() => editName()} style={{ marginTop: "27px", marginLeft: "100px" }} />
                </div>
              ) : (
                <div>
                  <input type="text" onChange={edit_name} value={fullName} id="input" />
                  {/* <botton >Save</botton> */}

                  <botton onClick={() => disabled_edit()}>Save</botton>
                </div>
              )}
            </div>

            <div className="any-thing">
              <p style={{ fontSize: "15px" }}>
                qwertyuiop Asdfghjkl. zxcvbnm, qwertyuioa sdfghjk xcvbnm sdfgbhn
                jmksxdcfvgbh
              </p>
            </div>

            <div className="about">
              <div className="about-abo">
                <p>About</p>
              </div>
              {edit1 ? (
                <div>
                  <input type="text" onChange={edit_name1} id="input" />
                  <botton onClick={() => disabled_edit1()}>Save</botton>
                  {/* <botton onClick={stop1()}>Save</botton> */}
                </div>
              ) : (
                <div className="profile_detail">
                  <h3>{about}</h3>
                  <AiTwotoneEdit onClick={() => editName1()} style={{ marginTop: "27px", marginLeft: "100px" }} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="icon1" >
            <div style={{ margin: "50px" }}>
              <div style={{ backgroundColor: "#e9edef", width: "430px", marginLeft: "-50px " }}>
                <div className="icon"  >
                  <div className="profile-img">
                    <img
                      src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                      alt=""
                      onClick={handleOpenModal}
                    />
                  </div>

                  <div className="profile-icon" >
                    <IoIosPeople style={{ width: "30px", height: "30px", marginTop: "13px", marginLeft: "10px" }} />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/107/107790.png"
                      alt=""
                    />
                    <BiMessageAltDetail style={{ width: "30px", height: "30px", marginTop: "15px", marginLeft: "10px" }} />
                    <AiOutlineMore style={{ width: "30px", height: "30px", marginTop: "15px", marginLeft: "5px" }} onClick={() => result()}
                    />
                  </div>
                  {showResults ?
                    <div style={{ backgroundColor: "white", marginLeft: "-150px", marginTop: "47px" }} >
                      <p style={{ width: "200px" }}>New Group</p>
                      <p style={{ width: "200px" }}>New Group</p>
                      <p style={{ width: "200px" }}>New Group</p>
                      <p style={{ width: "200px" }}>New Group</p>
                      <p style={{ width: "200px" }}>New Group</p>
                      <p style={{ width: "200px" }}>New Group</p>
                    </div> : ""
                  }
                </div>
              </div>

              <div className="search" >
                <div className="search1" style={{ display: "flex", flexDirection: "row" }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1890px-Vector_search_icon.svg.png" style={{ marginLeft: "10px", backgroundColor: "#e9edef", padding: "5px" }} />
                  <input type="search" />
                </div>
                <img
                  src="https://www.shutterstock.com/image-vector/three-lines-menu-icon-gray-260nw-2044393937.jpg"
                  alt="" style={{ width: "30px", height: "30px" }}
                />
              </div>

              <div className="people-chat1" style={{ overflow: "hidden" }}>
                <div className="chat1" style={{ marginTop: "20px" }}>
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat" >
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                  </div>
                </div>
                <hr></hr>

                <div className="chat1">
                  <div className="people-pic">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                      alt=""
                    />
                  </div>
                  <div className="people-chat">
                    <h1>Sneha</h1>
                    <p>qwertyuioplkjhgfdsazxcvbnm</p>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="chat-detail">
          <div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }} className="icon2">
                <img
                  src="https://thumbs.dreamstime.com/b/web-185687030.jpg"
                  alt=""
                />
                <div style={{ marginLeft: "450px", paddingTop: "25px" }}>

                  <BiSearch style={{ paddingRight: "30px" }} />

                  <AiOutlineMore />
                </div>


              </div>

              <div style={{ backgroundColor: "hsla(0,0%,100%,0.6)", width: "670px", height: "100vh", marginLeft: "-30px",overflowY:"scroll" }}>
              
                      <Chat1/>
                  
              </div>
            </div>
                  
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
