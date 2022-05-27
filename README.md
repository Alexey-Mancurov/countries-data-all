# Reverse-keyboard
The functon reverseKeyboard takes text and return string after changed keyboard layout (en => ru || ru => en)

## Installation
    npm i reverse-keyboard

## Usage
import to your file and pass the string to the parameters of the reverseKeyboard function

### from english to russian
    import reverseKeyboard from 'reverse-keyboard'

    const result = reverseKeyboard('bpvtyb hfcrkflre')

    console.log(result) // измени раскладку

### from russian to english
    import reverseKeyboard from 'reverse-keyboard'

    const result = reverseKeyboard('ремекыу лунищфкв')

    console.log(result) // reverse keyboard