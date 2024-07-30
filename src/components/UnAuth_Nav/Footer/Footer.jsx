import React from "react";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import fb from "../../../assets/logo/fb.png";
import insta from "../../../assets/logo/insta.png";
import you from "../../../assets/logo/you.png";
const Footer = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-3 gap-20 w-[85%] mx-auto p-8 border-2">
        <div className="">
          <div>Subscribe Newsletter</div>
          <div>Subscribe newsletter to get 5% on all products.</div>
        </div>

        <div>
          <div className="flex  gap-4">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </div>
        </div>

        <div className="flex w-6 gap-4 ">
          <img src={fb} alt="" className=" object-contain" />
          <img src={insta} alt="" className=" object-contain" />
          <img src={you} alt="" className=" object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
