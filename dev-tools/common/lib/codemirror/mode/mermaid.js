CodeMirror.defineSimpleMode("mermaid", {
  // The start state contains the rules that are intially used
  start: [
    {
      regex: /graph/,
      token: "keyword",
      push: "graph",
      indent: true
    },
    {
      regex: /gantt/,
      token: "keyword",
      push: "gantt",
      indent: true
    },
    {
      regex: /sequenceDiagram/,
      token: "keyword",
      push: "sequenceDiagram",
      indent: true
    },
    {
      regex: /classDiagram/,
      token: "keyword",
      push: "classDiagram",
      indent: true
    },
  ],
  graph: [
    {
      regex: /TB|BT|RL|LR|TD/,
      token: "keyword"
    },
    {
      regex: /-->|-.->|==>/,
      token: "keyword"
    },

  ],
  gantt: [
    {
      regex: /participant|note|dateFormat|title|excludes|weekdays|section|done|active/,
      token: "keyword"
    },

  ],
  // Sequence Diagram
  sequenceDiagram: [
    {
      regex: /-->>[-+]?|->>[-+]?|-->[-+]?|->[-+]?|--x[-+]?|-x[-+]?/,
      token: "keyword"
    },
    {
      regex: /alt/,
      token: "keyword",
      indent: true,
      push: "sequenceDiagramAlt"
    },
    {
      regex: /opt/,
      token: "keyword",
      indent: true,
      push: "sequenceDiagramOpt"
    },
    {
      regex: /loop/,
      token: "keyword",
      indent: true,
      push: "sequenceDiagramLoop"
    },
    {
      regex: /note|Note/,
      token: "keyword",
      push: "sequenceDiagramNote"
    },
  ],
  sequenceDiagramAlt: [
    {
      regex: /-->>[-+]?|->>[-+]?|-->[-+]?|->[-+]?|--x[-+]?|-x[-+]?/,
      token: "keyword"
    },
    {
      regex: /else/,
      token: "keyword",
    },
    {
      regex: /end/,
      token: "keyword",
      // dedent: true,
      dedentIfLineStart: true,
      pop: true
    },
  ],
  sequenceDiagramOpt: [
    {
      regex: /-->>[-+]?|->>[-+]?|-->[-+]?|->[-+]?|--x[-+]?|-x[-+]?/,
      token: "keyword"
    },
    {
      regex: /end/,
      token: "keyword",
      dedent: true,
      pop: true
    },
  ],
  sequenceDiagramLoop: [
    {
      regex: /-->>[-+]?|->>[-+]?|-->[-+]?|->[-+]?|--x[-+]?|-x[-+]?/,
      token: "keyword"
    },
    {
      regex: /end/,
      token: "keyword",
      dedent: true,
      pop: true
    },
  ],
  sequenceDiagramNote: [
    {
      pop: true
    },
  ],
  classDiagram: [
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