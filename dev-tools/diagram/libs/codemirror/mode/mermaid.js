CodeMirror.defineSimpleMode("mermaid", {
  // The start state contains the rules that are intially used
  start: [
    {
      regex: /graph|sequenceDiagram|gantt|classDiagram/,
      token: "keyword"
    },
    {
      regex: /participant|loop|end|dateFormat|title|excludes|weekdays|section|done|active/,
      token: "keyword"
    },
    {
      regex: /TB|BT|RL|LR|TD/,
      token: "keyword"
    },
    {
      regex: /-->>[-+]?|->>[-+]?|-->[-+]?|->[-+]?|--x[-+]?|-x[-+]?/,
      token: "keyword"
    },
    {
      regex: /\*--|--\*|o--|--o|<--|<-|--/,
      token: "keyword"
    },
  ],
  // The multi-line comment state.
  comment: [
    {regex: /.*?\*\//, token: "comment", next: "start"},
    {regex: /.*/, token: "comment"}
  ],
  // The meta property contains global information about the mode.
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "//"
  }
});