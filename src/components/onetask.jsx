import "./oneTask.css";
import "./typography.css";
const OneTask = () => {
  return (
    <div className="w-full max-w-44 h-24 rounded-2xl  bg-myMateBlack  theAfter">
      <div className="flex items-center gap-1 -mt-2 px-4 mb-1 ">
        <p className="font-bold THEtypo-xss text-myFontWhite">Date</p>{" "}
        <div className="h-1 w-1 bg-myFontWhite rounded-full"></div>
        <p className="font-bold THEtypo-xss text-myFontWhite">Time</p>
      </div>
      <div>
        <p className="  font-normal text-myFontWhite THEtypo-xs1 text-truncate px-4 h-10 ">
          Lorem ipsumdffffffffffsddddddd dolor sit amet consectetur adipisicing
          elit. Voluptatibus nam eos provident, incidunt corrupti iste ipsum
          eaque inventore optio temporibus omnis vel unde pariatur assumenda
          animi consequuntur voluptas autem eius?
        </p>
      </div>
    </div>
  );
};

export default OneTask;
