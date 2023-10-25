import React from "react";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();
   return (
      <>
         <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 font-bold text-9xl text-primary">404</h2>
            <span className="mb-4 text-white">
               Không thể tìm thấy trang bạn yêu cầu
            </span>
            <Button onClick={() => navigate("/")} className={"text-white"}>
               Quay về trang chủ
            </Button>
         </div>
      </>
   );
};

export default NotFound;
