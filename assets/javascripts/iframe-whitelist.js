(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/chatroll\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.chatroll\.com\/embed\/.+/i);
})();
