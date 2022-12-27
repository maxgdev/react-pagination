import React from "react";

const ShowItem = ({title, body, userId, id}) => {
    return (
        <div className="card card-item">
            <h6>Title: {title}</h6>
            <p>Body: {body}</p>
            <p>UserId: {userId}. Id: {id}</p>
        </div>
    )
}
export default ShowItem;