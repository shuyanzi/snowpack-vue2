const babel = require("@babel/core");
const requireToImport = require("./utils");
module.exports = function plugin(config, options) {
  console.log({config, options})
  return {
    defaultBuildScript: "build:js,jsx,ts,tsx",
    async build({ contents, filePath, fileContents }) {
      const result = await babel.transformAsync(contents || fileContents, {
        filename: filePath,
        cwd: process.cwd(),
        ast: false,
        compact: false,
      });
      if (result.code.includes('require')) {
        return { result: requireToImport(result.code) };
      } else {
        return { result: result.code };
      }
    },
  };
};