# Markdown Sample

## Inlines
### Text attributes

*Italic*

**Bold**

***Bold and italic***

~~Strikethrough~~

### Code

`printf("hello, world\n");`

### Emoji

:smile: :+1:

### Bullet list items

- Bullet list item 1
- Bullet list item 2
  - Bullet list item 2-1

### Ordered list items

1. Ordered list item 1
1. Ordered list item 2
   1. Ordered list item 2-1
   1. Ordered list item 2-2

### Task list items

- [ ] Task list item 1
  - [ ] Task list item 1-2
- [x] Task list item 2
  - [x] Task list item 2-2

### Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Blocks
### Quotes

> Block quotes text 1
>> Block quotes text 2

### Tables

| Default   | Center-aligne | Left-aligned | Right-aligned |
| --------- |:-------------:| :----------- | -------------:|
| Default   | Center        | Left         | Right         |
| Default   | Center        | Left         | Right         |

### Code

```c
/* Hello world in C */
#include <stdio.h>

main(void) {
    printf("hello, world\n");
}
```

### Diagrams

#### Flowcharts

See [Flowcharts](https://mermaid-js.github.io/mermaid/#/flowchart)

```mermaid
flowchart TD
  A-->B
  A-->C
  B-->D
  C-->D
  D-->E
```

#### Sequence diagrams

See [Sequence diagrams](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)

```mermaid
sequenceDiagram
  participant Alice
  participant John

  rect rgb(191, 223, 255)
  note right of Alice: Alice calls John.
  Alice->>+John: Hello John, how are you?
  rect rgb(200, 150, 255)
  Alice->>+John: John, can you hear me?
  John-->>-Alice: Hi Alice, I can hear you!
  end
  John-->>-Alice: I feel great!
  end
  Alice ->>+ John: Did you want to go to the game tonight?
  John -->>- Alice: Yeah! See you there.
```
