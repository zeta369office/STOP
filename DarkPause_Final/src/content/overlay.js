console.log("DarkPause Pro Content Loaded");
const div = document.createElement('div');
div.id = 'darkpause-pro-overlay';
div.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:black;z-index:2147483647;display:none;color:white;justify-content:center;align-items:center;font-size:48px;font-family:monospace;';
div.innerText = 'REST TIME';
document.body.appendChild(div);
chrome.runtime.onMessage.addListener((m) => { div.style.display = m.active ? 'flex' : 'none'; });
