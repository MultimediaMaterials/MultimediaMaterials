import ghpages from "gh-pages";

ghpages.publish('dist', {
  branch: 'main',
  repo: 'https://github.com/MultimediaMaterials/multimediamaterials.github.io.git'
}, function(err) {
  if (err) {
    console.error('Error publishing:', err);
  } else {
    console.log('Published successfully!');
  }
});
