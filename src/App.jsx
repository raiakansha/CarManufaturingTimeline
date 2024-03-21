import { Chrono } from "react-chrono";
import { timelineElements } from "./sampleData/data_config";
import { GiArchiveResearch } from "react-icons/gi";
import { FcPlanner } from "react-icons/fc";
import {
  MdOutlineDesignServices,
  MdOutlinePrecisionManufacturing,
  MdPointOfSale,
} from "react-icons/md";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="">
        <h1 className="text-4xl font-bold text-center my-5">
          Car Manufacturing Process
        </h1>
        <div className="">
          <Chrono
            items={timelineElements}
            mode="VERTICAL_ALTERNATING"
            timelinePointDimension={40}
            fontSizes={{ cardTitle: "1.5rem", title: "1.5rem" }}
            theme={{
              primary: "black",
              secondary: "white",
              iconBackgroundColor: "white",
            }}
            slideShow
            slideItemDuration={2000}
          >
            <div className="chrono-icons">
              <GiArchiveResearch size={40} />
              <FcPlanner size={40} />
              <MdOutlineDesignServices size={40} />
              <MdOutlinePrecisionManufacturing size={40} />
              <MdPointOfSale size={40} />
            </div>
          </Chrono>
        </div>
      </div>
    </div>
  );
}

export default App;
