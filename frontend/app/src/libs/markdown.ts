//@ts-nocheck
import "highlight.js/styles/github.css";
import MarkdownIt from "markdown-it";
import abbr from "markdown-it-abbr";
import checkbox from "markdown-it-checkbox";
import container from "markdown-it-container";
import deflist from "markdown-it-deflist";
import emoji from "markdown-it-emoji";
import footnote from "markdown-it-footnote";
import markdownItHighlight from "markdown-it-highlight";
import ins from "markdown-it-ins";
import mark from "markdown-it-mark";
import sanitizer from "markdown-it-sanitizer";
import sub from "markdown-it-sub";
import twemoji from "twemoji";
// //@ts-ignore
// import imsize from "markdown-it-imsize";

export const md: MarkdownIt = MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
  typographer: true,
})
  .use(markdownItHighlight, { auto: true, inline: true })
  .use(sanitizer)
  .use(emoji)
  .use(checkbox)
  .use(sub)
  .use(container, "info")
  .use(container, "success")
  .use(container, "warning")
  .use(container, "danger")
  .use(ins)
  .use(mark)
  .use(footnote)
  .use(deflist)
  // .use(imsize, { autofill: true })
  .use(abbr);

md.renderer.rules.emoji = (token, idx) => {
  return twemoji.parse(token[idx].content);
};
