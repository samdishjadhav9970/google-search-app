import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    return (
        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white   ">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow">
                    <img src={Logo} className="hidden md:block w-[92px] mr-10 " alt="" />
                    <SearchInput from="searchResult" />
                </div>
            </div>
        </div>
    )
};

export default SearchResultHeader;
