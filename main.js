const speach = window.webkitSpeechRecognition;
const result = new speach;
let text = document.getElementById('text')
result.lang = "uz-UZ"
let btn = document.getElementById('speak')
btn.addEventListener('click', () => {
    btn.textContent = 'Gapiraver'
    btn.classList.add('box')
    result.start()
})
setTimeout(() => {
    btn.classList.remove('box')
}, 10000)
result.onresult = (e) => {
    btn.classList.remove('box')
    btn.textContent = 'Bos va Gapir'
    text.textContent = e.results[0][0].transcript;
    console.log(e.results[0][0].transcript)

}
