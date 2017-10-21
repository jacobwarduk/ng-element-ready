# ng-element-ready

Detect when an element is truly _ready_, e.g. it has finished being populated with fresh data.

## Example

`index.html`
```
<div element-ready="data">{{ vm.data }}</div>
```

`app.js`
```
$scope.$on('data:ready', () => {
    // Do something
});
```
