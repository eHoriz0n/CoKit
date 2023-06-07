import OneTask from "./onetask";
import "./typography.css";

const PageBodyT = () => {
  return (
    <div>
      <p className="font-bold THEtypo-MyXl mb-4">Your Tasks</p>
      {/* it will be a loop to create journal Component */}
      <div className=" ">
        <div className="flex flex-wrap gap-4  ">
          <OneTask label={"do ur task"} />
          <OneTask label={"do urfgdfgdfsg task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task  db  fgfg"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur tasdfgsfdgsk"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"d task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur dfgsdtask"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur sdgsdfgtask"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do udgdsfgdfgsdfgr task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
          <OneTask label={"do ur task"} />
        </div>
      </div>
    </div>
  );
};

export default PageBodyT;
