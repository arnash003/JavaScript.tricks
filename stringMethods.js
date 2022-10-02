

"Hello".charAt(4) // o
"Hello".concat("", "world") // Hello World
"Hello".startsWith("H") // true
"Hello".endsWith("o") // true
"Hello".includes("x") // false
"Hello".indexOf("l") // 2
"Hello".lastIndexOf("l") // 3
"Hello".match(/[A-Z]/g) // ['H']
"Hello".padStart(6, "?") // ?Hello
"Hello".padEnd(6, "?") // Hello?
"Hello".repeat(3) // HelloHelloHello
"Hello".replace("llo", "y") // Hey
"Hello".search("e") // 1
"Hello".slice(1, 3) // el
"Hello".split("") // ['H' 'E' 'l' 'l' 'o']
"Hello".substring(2, 4) // ll
"Hello".toLocaleUpperCase() // hello
"Hello".toUpperCase() // HELLO
" Hello ".trim() //Hello
" Hello ".trimStart() // "Hello "
" Hello ".trimEnd() // " Hello"