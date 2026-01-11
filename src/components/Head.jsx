import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSideBarHandler } from "../store/appSlice";
import { cacheResults } from "../store/searchSlice";
import { img_profile, img_menu } from "../utils/constants.";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearchData, setShowSearchData] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(openSideBarHandler());

  const cachedSearch = useSelector((store) => store.search);

  const getSuggetstionData = async () => {
    try {
      if (cachedSearch[searchQuery]) {
        setSearchData(cachedSearch[searchQuery]);
      } else {
        const res = await fetch(
          `https://corsproxy.io/?url=http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
        );

        const json = await res.json();
        setSearchData(json[1]);

        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //wait for time to finish
    // clear time out if type quickly before timer finish it will  clear and remove settimeout from mempry then reset time from beginog
    // then each  key stoke we remove the settimeout and start from begining
    // if the time finish  before do  new key  stroke the funuction will invoke and get data
    // and do  this cycle every  key stroke
    const timer = setTimeout(() => {
      getSuggetstionData();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleToggle}
          className="h-8 cursor-pointer"
          src={img_menu}
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 ml-2"
            src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
            alt="youtube"
          />
        </a>
      </div>
      <div className="col-span-10 relative">
        <div>
          <input
            type="text"
            className="w-1/2 p-2 px-4 border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchData(true)}
            onBlur={() => setShowSearchData(false)}
          />
          <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100">
            search
          </button>
          {showSearchData && searchData && searchData.length && (
            <div className="absolute bg-white w-[42rem] mt-2 rounded-lg shadow-lg border broder-gray-1 p-2">
              <ul>
                {searchData?.map((item, i) => (
                  <li
                    key={i}
                    className=" py-2 px-4 hover:bg-gray-500 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-9" src={img_profile} alt="user" />
      </div>
    </div>
  );
};

export default Head;
