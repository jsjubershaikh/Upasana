// Vercel Entrypoint Fallback for Static Site
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Upasana Static Site</h1>');
};
 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