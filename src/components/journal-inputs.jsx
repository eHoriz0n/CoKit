import "./typography.css";
const JournalInputs = () => {
  return (
    <div className="w-full max-w-72 mb-16">
      <div className="mb-7">
        <p className="THEtypo-14 font-medium mb-7 text-myFontWhite ">Title</p>
        <input
          type="text"
          className=" px-4 font-medium block h-12 w-full max-w-72 bg-myWhite rounded-myround border-none  outline-none"
        />
      </div>
      <div>
        <p className="THEtypo-14 text-myWhite font-medium mb-7">Description</p>
        <textarea
          type="text"
          className="p-4 font-medium block bg-myWhite w-full max-w-72 h-96  rounded-2xl text-start border-none  outline-none "
        />
      </div>
    </div>
  );
};

export default JournalInputs;
