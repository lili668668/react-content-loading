# react-content-loading

A loading component

- [GitHub](http://github.com/lili668668/react-content-loading)
- [Document](http://lili668668.github.io/react-content-loading)

## Install

`$ yarn add react-content-loading`

## Example

![](./images/loading.gif)

```js
import { ContentLoading } from 'react-content-loading'

() => {
  return (
    <div>
      <div style={{ height: 50, width: 400, display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <ContentLoading height="50px" width="50px" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ paddingTop: 4 }}>
            <ContentLoading height="15px" width="340px" />
          </div>
          <div style={{ paddingTop: 4 }}>
            <ContentLoading height="15px" width="340px" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 8 }}>
        <ContentLoading height="20px" width="400px" />
      </div>
      <div style={{ paddingTop: 4 }}>
        <ContentLoading height="20px" width="400px" />
      </div>
      <div style={{ paddingTop: 4 }}>
        <ContentLoading height="20px" width="400px" />
      </div>
      <div style={{ paddingTop: 4 }}>
        <ContentLoading height="20px" width="400px" />
      </div>
    </div>
  )
}
```
