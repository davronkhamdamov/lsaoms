const speach = window.webkitSpeechRecognition;
const result = new speach;
let text = document.getElementById('text')
result.lang = "uz-UZ"
let btn = document.getElementById('speak')
btn.addEventListener('click', () => {
    btn.textContent = 'Gapiraver'
    result.start()
})
result.onresult = (e) => {
    btn.textContent = 'Bos va Gapir'
    text.textContent = e.results[0][0].transcript;

}
