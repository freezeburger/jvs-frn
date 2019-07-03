
# BamField
  * `On filed validity call bamAction with value`
## Props
  * bamValidator    callback { (value) => boolean }
  * bamPlaceHolder  string
  * bamAction       callback { (value) => void }
  * bamLeftIcon     Icon  -> [Usage of icon in Input](https://react-native-training.github.io/react-native-elements/docs/input.html#usage)
  * bamValue        string valeur par défault
## Children
  * Add onpress and trigger action

## Methods
  * triggerAction with validation

## Usage

```jsx
<BamField
  bamValidator={ (value) => /.*/.test(value) ? true : false }
  bamAction={ (value) => console.log(value) }
  ref={ (ref) => myRef = ref} 
/>
ref.triggerAction()
```


```jsx
<BamField
  bamPlaceHolder="A field"
  bamValidator={ (value) => /.*/.test(value) ? true : false }
  bamAction={ (value) => console.log(value) }
  ref={ (ref) => myRef = ref} 
>
  <Button title="Trigger action"/>
</BamField>
```