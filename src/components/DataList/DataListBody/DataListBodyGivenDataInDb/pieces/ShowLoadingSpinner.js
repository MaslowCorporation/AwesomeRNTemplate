import { React } from "react";
import { Spinner } from "src/components/Spinner/Spinner";

/**
 *
 * @param {*} contentColor la couleur du spinner
 *
 * @returns le spinner de patientage
 */
export const ShowLoadingSpinner = (props) => {
  return (
    <Spinner backgroundColor={props.backgroundColor} color={props.color} />
  );
};
