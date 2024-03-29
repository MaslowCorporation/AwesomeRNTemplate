

// Lets import GetAllUserVariables function here

// Define function that places user variable values into the code
const AddUserVarsToCode = (programCode, allUserVars, allUserValues) => {
  let editCode = programCode;

  // Check if allUserVars and allUserValues are not null
  if (allUserVars !== null && allUserValues !== null) {
    // Iterate through all the user-defined variables
    for (let variableIndex = 0; variableIndex < allUserVars.length; variableIndex++) {
      // Prepare the placeholder that should be replaced in the code
      const placeholder = `{{${allUserVars[variableIndex]}}}`;

      // Replace all occurrences of the placeholder in the code with its value
      // The 'g' in the regular expression means 'global', so it replaces all occurrences
      editCode = editCode.replace(new RegExp(placeholder, 'g'), allUserValues[variableIndex]);
    }
  }

  // If either allUserVars or allUserValues is null, 
  // We will not perform any replacements and return the code as it is

  // Return the result of replacing placeholders in the code with their actual values
  return editCode;
};

// Export AddUserVarsToCode function for external use
export { AddUserVarsToCode };

