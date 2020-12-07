const GitHubEmoji = {};

GitHubEmoji.download = function(url) {
  return $.ajax({
    type: 'GET',
    url: url,
    dataType: 'text',
    async : false,
    success: function(response) {
        return response;
    },
    error: function(response) {
        return response;
    }
  }).responseText;
}

GitHubEmoji.emojis = JSON.parse(GitHubEmoji.download('https://api.github.com/emojis'));

GitHubEmoji.png = function(key) {
  return GitHubEmoji.emojis[key];
}

GitHubEmoji.image = function(key) {
  const image = GitHubEmoji.png(key);
  if (!image) {
    return;
  }
  return `<img width="15" height="15" src="${image}" alt="icon" emoji="${key}" async></img>`
}

GitHubEmoji.replace = function(markdown) {
  let output = markdown;
  const emojis = markdown.match(/(:[a-z|A-Z|0-9|+|\-|_]*:)/g)
  if (emojis && emojis.length > 0) {
    emojis.forEach( function(value) {
      if (value.length < 3) {
        return;
      }
      const key = value.slice(1, -1);
      const emoji = GitHubEmoji.image(key)
      if (!emoji) {
        return;
      }
      output = output.replace(value, emoji);
    })
  }
  return output;
}

GitHubEmoji.list = function(handler) {
  let keys = Object.keys(GitHubEmoji.emojis)
  keys = keys.sort()
  return keys.map(key => handler(key, GitHubEmoji.png(key)))
}
