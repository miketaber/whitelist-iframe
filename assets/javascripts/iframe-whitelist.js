(function() {
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/chatroll\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.chatroll\.com\/embed\/.+/i);
})();

