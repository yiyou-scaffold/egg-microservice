

module.exports = {
  "hooks": {
    "pre-commit": ["echo '提交之后将自动部署'"].join("&&"),
    "post-commit":["npm run doc:deploy"].join("&&")
  }
};