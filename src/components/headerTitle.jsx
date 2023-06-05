import useRoutingState from "../context/routeState";
import "./typography.css";
const HeaderTitle = () => {
  const { whereImIn } = useRoutingState((state) => ({
    whereImIn: state.whereImIn,
  }));

  return (
    <div>
      {whereImIn === "task" && (
        <p className="font-bold THEtypo-777"> Plan for something ?</p>
      )}
      {whereImIn === "journal" && (
        <p className="font-bold THEtypo-777"> Any thoughts for today?</p>
      )}
    </div>
  );
};

export default HeaderTitle;
