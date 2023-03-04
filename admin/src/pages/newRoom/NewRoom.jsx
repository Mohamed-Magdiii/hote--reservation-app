import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = ({ inputs, title }) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({})
  const [hotelId, setHotelId] = useState([])
  const [rooms, setRooms] = useState([])
  
  const  {data, loading, error} = useFetch('/hotels')

  const handleChange =  e =>{
    setInfo(prev => ({...prev , [e.target.name]:e.target.value}));
    console.log(info)

  }
  const handleClick =async e => {
    e.preventDefault();
    const roomNumbrs = rooms.split(',').map((room) => ({number:  room}))
    try {
        await axios.post(`/rooms/${hotelId}`,  {...info, roomNumbrs})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
         
          <div className="right">
            <form>
          
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input name={input.name} type={input.type} placeholder={input.placeholder} onChange={handleChange}/>
                </div>
              ))}
               <div className="formInput">
                <label>Rooms</label>
                <textarea onChange={(e) =>  setRooms(e.target.value)} placeholder={"give comma between room numbers"}  />
                </div>
               <div className="formInput">
                <label>Choose A hotel</label>
                <select name="hotelId" onChange={(e)=>setHotelId(e.target.value)}> 
                  {loading ? "loading" : data && data.result.map((hotel)=>(
                    <option value={hotel._id}> {hotel.name}</option>
                  ))}
                </select>
                </div>
                
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
