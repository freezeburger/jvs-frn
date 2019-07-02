
# BamHeader

## Props

* title (string | ReactElement): titre du header
* bamAction (function): callback
  * action:
    * SHOW_PROFILE
    * USER_DISCONNECT

## Usage

```jsx
<BamHeader bamAction={console.log} />
```

```jsx
<BamHeader 
  bamAction={console.log}
  title="Titre"
/>
```

```jsx
<BamHeader 
  bamAction={console.log}
  title={
      <Text>Titre</Text>
  }
/>
```