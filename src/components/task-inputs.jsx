const TasksInput = () => {
  return (
    <div>
      <div className="mb-7">
        <p className="THEtypo-14 font-medium mb-7  text-myWhite">When</p>
        <div className="flex gap-2.5">
          <input
            type="text"
            className="px-4 font-medium h-12 w-full  rounded-myround border-none outline-none"
          />
          <input
            type="text"
            className="px-4 font-medium h-12 w-24 rounded-myround  border-none outline-none"
          />
        </div>
      </div>
      <div className="mb-7">
        <p className="THEtypo-14 font-medium mb-7 text-myWhite ">Title</p>
        <input
          type="text"
          className=" px-4 font-medium h-12  rounded-myround w-full border-none outline-none "
        />
      </div>
      <div>
        <p className="THEtypo-14 font-medium mb-7 text-myWhite">Description</p>
        <textarea
          type="text"
          className="p-4 font-medium h-60 w-full rounded-2xl text-start border-none outline-none mb-7 "
        />
      </div>
    </div>
  );
};

export default TasksInput;
