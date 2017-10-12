Global shims from the `collections` library are breaking my unit tests.

The test without importing anything from `collections` fails correctly:

```console
$ ./node_modules/.bin/ava test/ok.js

  1 failed

  [anonymous]

  /home/vith/code/ava-stall/test/ok.js:7

   6: test(async t => {
   7:   throw new Error()
   8: })

  Rejected promise returned by test. Reason:

  Error {
    message: '',
  }
```

Adding `import { SortedSet } from 'collections/sorted-set'` makes the test just stall forever:

```console
$ ./node_modules/.bin/ava test/stall.js

 ⠋
```

Removing the network listener from the test avoids the permanent stall but now the error handler breaks:

```console
$ ./node_modules/.bin/ava test/break.js

  1 failed
  1 rejection

  [anonymous]


  Promise returned by test never resolved



  Unhandled Rejection
  TypeError: Cannot read property 'invert' of undefined
    Collection.toString (node_modules/concordance/lib/lineBuilder.js:133:16)
    Collection.toString (node_modules/concordance/lib/lineBuilder.js:162:62)
    formatDescriptor (node_modules/concordance/lib/format.js:94:17)
    Object.format (node_modules/concordance/lib/format.js:99:10)
    <anonymous>
```
