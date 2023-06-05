const TasksInput = () => {
  return (
    <div className="myLg:max-w-4444 ">
      <div className="mb-7 ">
        <p className="THEtypo-14 font-medium mb-7  text-myFontWhite">When</p>
        <div className="flex gap-2.5">
          <input
            type="text"
            className="px-4 font-medium h-12 w-full max-w-72  bg-myWhite rounded-myround border-none outline-none"
          />
          <input
            type="text"
            className="px-4 font-medium h-12 w-24 rounded-myround bg-myWhite border-none outline-none"
          />
        </div>
      </div>
      <div className="mb-7">
        <p className="THEtypo-14 font-medium mb-7 text-myFontWhite ">Title</p>
        <input
          type="text"
          className=" px-4 font-medium h-12 bg-myWhite rounded-myround w-full max-w-the72 border-none outline-none "
        />
      </div>
      <div>
        <p className="THEtypo-14 font-medium mb-7 text-myFontWhite">
          Description
        </p>
        <textarea
          type="text"
          className="p-4 font-medium h-60 w-full rounded-2xl bg-myWhite text-start border-none outline-none mb-7 myLg:w-4444 "
        />
      </div>
    </div>
  );
};

export default TasksInput;
