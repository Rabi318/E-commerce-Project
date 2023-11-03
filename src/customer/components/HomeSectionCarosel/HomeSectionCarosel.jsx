import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarosel = ({data,sectionName}) => {
    const[activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item);

    const items = data.slice(0,8).map((item) => <HomeSectionCard product={item} />)

    return (
        <div className=" px-4 lg:px-8 ">
            <h2 className="text2xl font-extrabold text-gray-800">{sectionName}</h2>
            <div className="relative p-5 ">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={setActiveIndex}
                    activeIndex={activeIndex}
                />
               {activeIndex!==items.length-5 && <Button variant="contained" className="z-50 " onClick={slideNext} sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

               {activeIndex !== 0 && <Button variant="contained" className="z-50 " onClick={slidePrev} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white" }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

            </div>
        </div>
    )
}

export default HomeSectionCarosel