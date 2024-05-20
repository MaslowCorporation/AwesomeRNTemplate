

// Function: GetAllUserVariables
// Arguments: code (string, some computer code)
// Returns: Array of strings (user variables found in the source code)

function GetAllUserVariables(code) {
  try {
    // Initialize an empty array to store the found user variables
    let userVariables = [];

    // Regular expression pattern to match user variables
    const pattern = /\{\{([A-Za-z0-9_]+)\}\}/g;

    // Find all matches in the code using the regular expression pattern
    const matches = code.match(pattern);

    // If no matches were found, return null
    if (!matches) {
      return null;
    }

    // Iterate through the matches and extract the variable names without brackets
    for (let i = 0; i < matches.length; i++) {
      // Extract the variable name from the matched string by removing the surrounding brackets
      const variableName = matches[i].substring(2, matches[i].length - 2);

      // Add the variable name to the userVariables array
      userVariables.push(variableName);
    }

    // Return the array of user variables
    return userVariables;
  } catch (error) {
    // If any error occurs during the search, return null
    return null;
  }
}

// Export the function for external usage
export { GetAllUserVariables };
