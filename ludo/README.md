
# BamHeader

## Props

* title (string | React.ReactElement): titre du header
* bamAction (function): callback
  * action:
    * SHOW_PROFILE
    * USER_DISCONNECT

## Usage

```jsx
<BamHeader bamAction={console.warn} />
```

```jsx
<BamHeader
  bamAction={console.warn}
  title="Miaou"
/>
```

```jsx
<BamHeader
  bamAction={console.warn}
  title={
      <Text>Miaou</Text>
  }
/>
```
