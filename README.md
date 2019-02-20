# react-content-loading

![TravisCI](https://travis-ci.org/lili668668/react-content-loading.svg?branch=master)
[![codecov](https://codecov.io/gh/lili668668/react-content-loading/branch/master/graph/badge.svg?token=jU3b8FMc2F)](https://codecov.io/gh/lili668668/react-content-loading)


A loading component

- [GitHub](http://github.com/lili668668/react-content-loading)
- [Document](http://lili668668.github.io/react-content-loading)

## Install

`$ yarn add react-content-loading`

## Example

![](https://github.com/lili668668/react-content-loading/raw/master/images/loading.gif)

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
