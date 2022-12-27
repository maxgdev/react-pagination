import React from "react";
import "./ApiData.css";
import { useEffect, useState } from "react";
import ShowItem from "./ShowItem";


const ApiData = () => {

    const [data, setData] = useState([]);

    const ApiURL = "https://jsonplaceholder.typicode.com/posts";

    const loadApiData = () => {
        fetch(ApiURL, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    setData(result);
                }
            })
            .catch((err) => {
                console.log("Api Error: ", err)
            })
    }

    useEffect(() => {
        loadApiData();
    }, []);

    return (
        <div className="container">
            <div className="info-design">
                <h2>List of Posts</h2>
                {/* <p>{JSON.stringify(data)}</p> */}
                {data.map((item, index) => (
                    // < ShowItem 
                    //     key={item.id} 
                    //     title={item.title} 
                    //     body={item.body} 
                    //     userId={item.userId} 
                    //     id={item.id} 
                    // />
                    // NOT suitable for large prop fiels/values
                    < ShowItem 
                    key={item.id} 
                    {...item}
                    // Better to use SPREAD operator
                />
                ))}

            </div>
        </div>
    )
}
export default ApiData;