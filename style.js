function switchFrame(frameId) {
  document.querySelectorAll('.frame').forEach(frame => frame.classList.remove('active'));
  document.querySelectorAll('.navBtn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(frameId).classList.add('active');
  event.target.classList.add('active');
} 