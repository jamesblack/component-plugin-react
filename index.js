var transform = require('react-tools').transform;

module.exports = function(options) {
  return function pluginReact(file, done) {
    if (file.extension !== "jsx") return done();
    file.read(function(err, string) {
      if (err) return done(err);
      file.string = transform(string);
      done();
    });
  };
};