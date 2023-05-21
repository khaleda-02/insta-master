import React from 'react'

//TODO: make the download btn disabled untile the user generate a post .
//TODO: when the user pressed the generate button , and while it's generating show the loading popup . 

const Table = ({ post, changesHandler }) => {


  const handler = (event) => {
    let updatedPost = {
      ...post,
      caption: event.target.value
    }
    changesHandler(updatedPost);
  }


  function handleDownload(imgUrl) {
    fetch(imgUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left ">

        <thead className="text-sm uppercase tracking-widest purple">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Content
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="">
            <th scope="row" className="px-6 py-4 font-medium purple whitespace-pre-wrap ">
              Post Image
            </th>
            <td className="px-6 py-4">
              <button onClick={() => handleDownload(post.imgUrl)} className='text-xs font-bold px-2 py-1 bg-purple rounded-sm'>
                Download Image
              </button>
            </td>
          </tr>

          <tr className="">
            <th scope="row" className="px-6 py-4 font-medium purple whitespace-pre-wrap ">
              Post Caption
            </th>
            <td className="px-6 py-4">
              <textarea onChange={handler} defaultValue={post?.caption || ''} className="textarea textarea-secondary text-white w-full resize-none focus:outline-none bg-transparent rounded-none capitalize h-[160px]" />
            </td>
          </tr>

          <tr className="">
            <th scope="row" className="px-6 py-4 font-medium purple whitespace-pre-wrap ">
              Best Tags to use
            </th>
            <td className="px-6 py-4">
              <div className='max-w-full flex items-center justify-start flex-wrap gap-3' >
                {post?.hashTags.slice(0, 6)
                  .map(el => {
                    return <p className="btn-secondary text-sm px-2 py-1 min-h-[1rem]">{el}</p>
                  })}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default Table
