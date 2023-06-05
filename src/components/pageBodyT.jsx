import OneTask from "./onetask";
import "./typography.css";

const PageBodyT = () => {
  return (
    <div>
      <p className="font-bold THEtypo-MyXl mb-4">Your Tasks</p>
      {/* it will be a loop to create journal Component */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 gap-6 w-full max-w-444 mb-12 lg:grid-cols-4 myLg:max-w-4444 myLg:grid-cols-3">
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
          <OneTask />
        </div>
      </div>
    </div>
  );
};

export default PageBodyT;
