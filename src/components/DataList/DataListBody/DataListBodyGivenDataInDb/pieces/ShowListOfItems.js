import { React } from "react";
import { DataListBodyGivenScrollType } from "./DataListBodyGivenScrollType";

export const ShowListOfItems = (props) => {
  /**
   * retourne un scroll:
   *
   * vertical,
   * ou horizontal,
   * ou vertical 1 par 1,
   * ou horizontal 1 par 1,
   *
   * selon besoin
   */

  return (
    <DataListBodyGivenScrollType
      dataItems={props.dataItems}
      appbarStyle={props.appbarStyle}
      bottomBarStyle={props.bottomBarStyle}
      dataListStyle={props.dataListStyle}
      currentIndex={props.currentIndex}
      setCurrentIndex={props.setCurrentIndex}
    ></DataListBodyGivenScrollType>
  );
};
