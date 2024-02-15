import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

export const _OnHTTPRequestDone = (onDone, result) => {
  //

  return RunIfPossible({
    func: onDone,
    args: result,
  });
};
