console.log('Hello World')
let touch = document.getElementById('ham')
touch.addEventListener('click', function open() {
    document.getElementById('hamb').style.display = 'flex'
})
let okay = document.getElementById('main')
okay.addEventListener('click', function close() {
    document.getElementById('hamb').style.display = 'none'

})