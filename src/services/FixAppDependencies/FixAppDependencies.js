const fs = require('fs');
const path = require('path');

function FixAppDependencies() {
  const cwd = process.cwd();
  const gradleFilePath = path.join(cwd, 'node_modules', 'expo-modules-autolinking', 'scripts', 'android', 'autolinking_implementation.gradle');

  fs.readFile(gradleFilePath, 'utf8', (error, data) => {
    if (error) {
      console.log(`Error reading file: ${error}`);
      return;
    }

    const updatedData = data.replace(/json.extraDependencies.androidMavenRepos/g, 'json?.extraDependencies?.androidMavenRepos?');

    fs.writeFile(gradleFilePath, updatedData, 'utf8', (error) => {
      if (error) {
        console.log(`Error writing file: ${error}`);
        return;
      }
      console.log('App Dependencies Fix applied successfully.');
    });
  });
}

// Example usage
FixAppDependencies();
