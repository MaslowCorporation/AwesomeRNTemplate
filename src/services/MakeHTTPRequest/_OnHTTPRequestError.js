import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

export const _OnHTTPRequestError = (e, onError, onFailSafe) => {
  console.log(`request failed: ${e}`);

  RunIfPossible({
    func: onError,
    args: e,
  });
};
