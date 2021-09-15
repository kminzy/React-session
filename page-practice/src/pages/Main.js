import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

function Main() {
    const [page, setPage] = useState("");
    useEffect(()=>{
        setPage("Main");
    },[]);

    return (
        <>
            <div>This is {page} page</div>
            <Header />
            <Body page={page} />
            <Footer />
            <button>
                <Link to="/detail">go to detail</Link>
            </button>
        </>
    );
}

export default Main;