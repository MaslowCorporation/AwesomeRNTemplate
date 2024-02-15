/**
 * Asynchronously applies a provided async callback function to each item in an array of data
 * and returns an array of results.
 *
 * @param {Array} data - An array of data to be processed.
 * @param {Function} asyncCallback - An async callback function to be applied to each item.
 * @param {number} index - The index of the current item in the array.
 * @returns {Promise<Array>} - A promise that resolves to an array of results.
 * 
 * @example
 * const data = [1, 2, 3];
 * const asyncDouble = async (num, index) => {
 *   return num * 2 + index;
 * };
 * const mappedResults = await mapAsync(data, asyncDouble);
 * // mappedResults will be [2, 5, 8]
 */
async function mapAsync(data, asyncCallback) {
    const results = await Promise.all(data.map(async (item, index) => {
        return await asyncCallback(item, index);
    }));

    return results;
}

/**
 * Asynchronously reduces an array of data by applying an async callback function with an accumulator
 * and each item successively.
 *
 * @param {Array} data - An array of data to be processed.
 * @param {Function} asyncCallback - An async callback function to be applied to each item.
 * @param {*} initialValue - The initial value of the accumulator.
 * @param {number} index - The index of the current item in the array.
 * @returns {Promise<*>} - A promise that resolves to the final value of the accumulator.
 * 
 * @example
 * const data = [1, 2, 3];
 * const asyncSum = async (accumulator, num, index) => {
 *   return accumulator + num + index;
 * };
 * const reducedResult = await reduceAsync(data, asyncSum, 0);
 * // reducedResult will be 9
 */
async function reduceAsync(data, asyncCallback, initialValue) {
    let accumulator = initialValue;

    for (let index = 0; index < data.length; index++) {
        accumulator = await asyncCallback(accumulator, data[index], index);
    }

    return accumulator;
}

/**
 * Asynchronously iterates over an array of data and applies an async callback function to each item.
 *
 * @param {Array} data - An array of data to be processed.
 * @param {Function} asyncCallback - An async callback function to be applied to each item.
 * @param {number} index - The index of the current item in the array.
 * @returns {Promise<void>} - A promise that resolves when all async callbacks are completed.
 * 
 * @example
 * const data = [1, 2, 3];
 * const asyncLog = async (num, index) => {
 *   
 * };
 * await forEachAsync(data, asyncLog);
 * // Will log 1 0, 2 1, 3 2
 */
async function forEachAsync(data, asyncCallback) {
    for (let index = 0; index < data.length; index++) {
        await asyncCallback(data[index], index);
    }
}

/**
 * Asynchronously filters an array of data based on the results of async filtering callback function.
 *
 * @param {Array} data - An array of data to be processed.
 * @param {Function} asyncCallback - An async callback function for filtering.
 * @param {number} index - The index of the current item in the array.
 * @returns {Promise<Array>} - A promise that resolves to an array of filtered items.
 * 
 * @example
 * const data = [1, 2, 3, 4, 5];
 * const asyncIsEven = async (num, index) => {
 *   return (num + index) % 2 === 0;
 * };
 * const filteredItems = await filterAsync(data, asyncIsEven);
 * // filteredItems will be [2, 4]
 */
async function filterAsync(data, asyncCallback) {
    const results = await Promise.all(data.map(async (item, index) => {
        const shouldInclude = await asyncCallback(item, index);
        return shouldInclude ? item : null;
    }));

    return results.filter(item => item !== null);
}

export {
    mapAsync,
    reduceAsync,
    forEachAsync,
    filterAsync
};
