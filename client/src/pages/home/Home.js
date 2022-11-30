import React from "react";

import Body from "./body/Body";
import Header from "./header/Header";

const Home = () => {
    return(
        <div className="app__wrapper center">
            <Header />
            <Body />
        </div>
    );
}

export default Home;