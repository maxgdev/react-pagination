import React from "react";
import "./ApiData.css";
import { useEffect, useState } from "react";
import ShowItem from "./ShowItem";
import Pagination from "./Pagination";

const ApiData = () => {
    // State
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // URL for REST API
    const ApiURL = "https://jsonplaceholder.typicode.com/posts";
    // Other constants
    const ItemsPerPage = 5;
    const offset = currentPage * ItemsPerPage;
    const currentPageData = data.slice(offset, offset + ItemsPerPage);
    const pageCount = Math.ceil(data.length/ItemsPerPage);


    // functions

    const handlePageClick = ({selected: selectedPage})=> {
        setCurrentPage(selectedPage);
    }

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
                {currentPageData.map((item, index) => (
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
            <div>
                <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
        </div>
    )
}
export default ApiData;