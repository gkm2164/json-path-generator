## Json Path Generator

```ts
import {toJsonPath} from "@gkm2164/json-path-generator"

const $ = toJsonPath({
    a: "is a",
    b: ["1", "2"],
    c: {
        $: "itself",
        c1: "1234",
        c2: "2345"
    }
});

$ == {
    a: "$.a",
    b: ["$.b[0]", "$.b[1]"],
    c: {
        $: "$.c",
        c1: "$.c.c1",
        c2: "$.c.c2",
    }
}
```