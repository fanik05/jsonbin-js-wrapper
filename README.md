# jsonbin-js-wrapper

## How to use
`const { jsonBinWrapper } = require('jsonbin-js-wrapper');

const jBin = jsonBinWrapper(<Your API Key>);

async function test {
  await jBin.<available methods>
  .....
  .....
}
`

## methods

- `getBin(<BIN_ID>)`
- `getSpecificBin(<BIN_ID>, <BIN_VERSION>)`
- `getLatestBin(<BIN_ID>)`
- `postBin(<data[obj]>)`
- `putBin(<BIN_ID>, <data[obj]>)`
- `deleteBin(<BIN_ID)>)`
