import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

function Detail() {
    const [page, setPage] = useState("");
    useEffect(() => {
        setPage("Detail");
    });

    return (
        <>
            <div>This is {page} page</div>
            <Header />
            <Body page={page} />
            <Footer />
            <button>
                <Link to="/">go to main</Link>
            </button>
        </>
    );
}

export default Detail;