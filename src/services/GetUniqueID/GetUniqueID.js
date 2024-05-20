/* PLOP_INJECT_IMPORT */
import uuid from "react-native-uuid";

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet dobtenir un UUID
 */
const GetUniqueID = () => {
  /* PLOP_INJECT_CODE */

  return uuid.v1();
};

export { GetUniqueID };
