import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button className="bg-[#FF8F2F] hover:bg-[#FF8F2F] text-white w-full">
      <p className="py-2 buttonFont leading-tight">{props.ButtonName}</p>
    </Button>
  );
};
export default CustomButton;
