문제 되었던 코드

```js
const DialogRightSection = styled.div.attrs(() => ({
  className: 'test',
}))`
  width: 65%;
`;
```

수정 후 코드(원인 미상)

```js
const DialogRightSection = styled.div.attrs({
  className: 'test',
})`
  width: 65%;
`;
```
