import React from "react";
import Dashboard from "../../hoc/Dashboard";

const CreatePost = () => {
  return (
    <div className="max-h-[100vh] overflow-hidden ">
      <Dashboard
        chlidren={
          <iframe
            title="G&D-sales"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=2e32ca3e-b4fb-472b-bbee-f99e1f5c2d21&autoAuth=true&ctid=7fa6b698-99fb-4ef6-81ba-067ba38bd389"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        }
      />
    </div>
  );
};

export default CreatePost;
