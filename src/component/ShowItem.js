import React from "react";
import { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc"

const ShowItem = ({ title, body, userId, id }) => {
    const [show, setShow] = useState(false);

    const Content = () => {
        return (
            <>
                <p>Body: {body}</p>
                <p>UserId: {userId}. Id: {id}</p>
            </>
        )
    }

    const toggleItem = () => {
        setShow(!show);
    }

    return (
        <div className="card card-design" onClick={toggleItem}>
            <div className="">
                <div class="card-body">
                    <h5 class="card-title">Title: {title}<span>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</span></h5>
                    
                    <p class="card-text">{show && <Content />}</p>
  
                </div>

            

                 
            </div>
        </div>
    )
}
export default ShowItem;