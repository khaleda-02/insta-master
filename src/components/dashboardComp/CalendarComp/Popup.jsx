import React, { useEffect } from "react";

const Popup = ({ data }) => {
  useEffect(() => {

    //! scenarios 
    // call api to get the day posts 
    // make a loading while is's pending . 
    // and then set the state (posts) , then map throght the state and render state's posts with the id as the key
    // when the user clicks on delete button , call the delete endpoint. 

    // when the user clicks on edit button , call the getPostById endpoint then the modle popup   
    console.log(data)
  }, [])
  return (
    <div >
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h1 className="font-bold w-full border-b-2 border-[#D644D6] border-solid pb-2 text-2xl text-center">{data}</h1>
          <div className="posts-list" >
            <div className="post-group my-3 px-2 flex items-center justify-between">
              <h2>post title </h2>
              <div className=" flex items-center justify-between gap-3">
                <label htmlFor="my-modal" className="btn btn-outline btn-info min-h-[20px] h-[2rem] card-image-container cursor-pointer">edit & delete</label>
                {/** <label htmlFor="my-modal-3" className="btn btn-outline btn-error min-h-[20px] h-[2rem]">Delete</label> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
