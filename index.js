module.exports = text => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match (urlRegex, function (url) {
    return url;
  });
};
