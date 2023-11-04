import { Grade } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl">
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/7/n/l/-original-imaggyeugbghgfdg.jpeg?q=70" alt="" />
            <div className="ml-5 space-y-2">
              <p>Men slim mid rise black jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>

            </div>
          </div>
        </Grid>
          <Grid item xs={2}>
            <p>$1059</p>

          </Grid>
          <Grid item xs={4}>
           { true && <div> <p>
            <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2"/>
              <span>
                Delivered on Nov 23
              </span>
            </p>
            <p className="text-xs">
              Your Item Has Been Deliverd
            </p>
            </div>}
            { false &&<p>
              <span>
                Expected Delivery On Nov 25
              </span>
            </p>}
          </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard