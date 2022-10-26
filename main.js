const speach = window.webkitSpeechRecognition;
const result = new speach;
let text = document.getElementById('text')
result.lang = "uz-UZ"
let btn = document.getElementById('speak')
btn.addEventListener('click', () => {
    btn.textContent = 'gapiraver'
    result.start()
})
result.onresult = (e) => {
    text.textContent = e.results[0][0].transcript;
    btn.textContent = 'bos va gapir'

}
