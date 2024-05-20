export function FilterObjectByKeys(obj, allowedKeys) {
    const filteredObject = {};

    for (const key in obj) {
        if (allowedKeys.includes(key)) {
            filteredObject[key] = obj[key];
        }
    }

    return filteredObject;
}

