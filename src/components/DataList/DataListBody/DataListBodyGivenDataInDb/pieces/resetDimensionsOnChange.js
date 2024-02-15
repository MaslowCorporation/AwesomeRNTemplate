import { useEffect } from "react";

/**
 *
 * @param {*} dimensions
 * @param {*} window
 * @param {*} setDimensions
 *
 * TODO: Ceci est un callback/hack malpropre de redimensionnage décran, a réecrire.
 */
export function resetDimensionsOnChange({ dimensions, window, setDimensions }) {
  useEffect(() => {
    if (
      dimensions.window.height != window.height ||
      dimensions.window.width != window.width
    ) {
      setDimensions({ window });
    }
  });
}
