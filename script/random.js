// Module Random kata 
// By Rakhaa

/**/

export const kata = [
    "Hello",
    "Thanks",
    "Whare",
    "Happy Birthday",
    "Mobile Legends",
    "Android",
    "Google",
    "OpenAI",
    "Terminal",
    "Child",
    "Game"
];

export function randomChoices(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}