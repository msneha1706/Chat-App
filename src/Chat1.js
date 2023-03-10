import React from 'react'

function Chat1() {
  const chat = [
    {
      id: 1,
      msg: "hello"
    },

    {
      id: 2,
      msg: "hi"
    },

    {
      id: 1,
      msg: "hello1"
    },

    {
      id: 2,
      msg: "hi"
    },

    {
      id: 1,
      msg: "hello2"
    },

    {
      id: 2,
      msg: "hi"
    },

    {
      id: 1,
      msg: "hello3"
    },

    {
      id: 2,
      msg: "hi"
    },

    {
      id: 1,
      msg: "hello"
    },

    {
      id: 2,
      msg: "hi"
    },

    {
      id: 1,
      msg: "hello5"
    },

    {
      id: 2,
      msg: "hi"
    },

    {
      id: 1,
      msg: "hello"
    },

    {
      id: 1,
      msg: "hello"
    },

    {
      id: 1,
      msg: "hello6"
    },

    {
      id: 1,
      msg: "hello"
    },

    {
      id: 2,
      msg: "hi"
    },
    {
      id: 2,
      msg: "hi"
    },
    {
      id: 2,
      msg: "hi4"
    },
    {
      id: 2,
      msg: "hi"
    },
    {
      id: 2,
      msg: "hi6"
    },
    {
      id: 2,
      msg: "hi"
    },
    {
      id: 1,
      msg: "hello"
    },

    {
      id: 1,
      msg: "hello7"
    },

    {
      id: 1,
      msg: "hello"
    },

    {
      id: 1,
      msg: "hello8"
    },

    {
      id: 2,
      msg: "hi"
    },
    {
      id: 2,
      msg: "hi9"
    },
    {
      id: 2,
      msg: "hi"
    },
    {
      id: 2,
      msg: "hi6"
    },
    {
      id: 2,
      msg: "hi"
    },
    {
      id: 2,
      msg: "hi23"
    }


  ]
  return (
    <div >

      {
        chat?.map((item)=>{
          return (<div style={{width:"100%",textAlign:"right",display:"flex",flexDirection:"coloumn",alignItems:"flex-end",position:"relative"}}>
           {item.id === 1 ? <p style={{maxWidth:"300px",backgroundColor:"#00a884",position:"absolute",right:"0"}}>{item.msg}</p>
           :<p style={{maxWidth:"300px",backgroundColor:"white",position:"absolute",left:"0"}}>{item.msg}</p>}
          </div>)
          
          // :(<div style={{width:"100%",textAlign:"left",display:"flex",flexDirection:"coloumn",alignItems:"flex-End",position:"relative"}}>
          //   <p style={{maxWidth:"300px",backgroundColor:"white",position:"absolute",left:"0"}}>{item.msg}</p>
          // </div>)
        })
      }


    </div>
  )
}

export default Chat1