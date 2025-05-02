const checkMood = () => {
    const mood = document.getElementById('moodInput').value.toLowerCase();
    let response = ''

    if (mood === 'happy') {
        response = 'Yes baby! Keep smiling! 🥰'
    } else if (mood === 'sad') {
        response = 'Aww baby, sending virtual hugs 🫂'
    } else if (mood === 'tired') {
        response = 'Go take a nap, you deserve it 🛌'
    } else {
        response = "I don't know that mood, but you still look fabulous 🗿"
    }

    document.getElementById('response').innerText = response;
}