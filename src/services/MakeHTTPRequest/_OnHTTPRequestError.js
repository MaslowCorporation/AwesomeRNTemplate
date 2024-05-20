import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

export const _OnHTTPRequestError = (e, onError, onFailSafe) => {


  RunIfPossible({
    func: onError,
    args: e,
  });
};
