# jsonbin-js-wrapper

## How to use

```
const jsonBin = require('jsonbin-js-wrapper')(<Your API Key>);

jsonBin.<available methods>.then(<handle success>).catch(<handle errors>);

```

## methods

- `get(<BIN_ID>)`
- `getSpecific(<BIN_ID>, <BIN_VERSION>)`
- `getLatest(<BIN_ID>)`
- `post(<data[obj]>, binName)`
- `put(<BIN_ID>, <data[obj]>)`
- `delete(<BIN_ID)>)`
