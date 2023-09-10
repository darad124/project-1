const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const slack_name = req.query.slack_name || "Gbolagade_Oluwadara";
  const track = req.query.track || "backend";
  const current_day = new Date().toLocaleString('en-us', {  weekday: 'long' });
  const utc_time = new Date().toISOString();
  const github_file_url = 'https://github.com/darad124/project-1/blob/main/server.js';
  const github_repo_url = 'https://github.com/darad124/project-1';
  const status_code = 200;

  res.json({
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
