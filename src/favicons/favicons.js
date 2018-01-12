const faviconsContext = require.context(
  '!!file-loader?name=[name].[ext]!.',
  true,
  /\.(svg|png)$/
);
faviconsContext.keys().forEach(faviconsContext);