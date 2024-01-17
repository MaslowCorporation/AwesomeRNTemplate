import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

export const _OnHTTPRequestDone = (onDone, result) => {
  //console.log(`request done. Result: ${result}`);

  return RunIfPossible({
    func: onDone,
    args: result,
  });
};
