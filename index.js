document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');

  if (contentDiv) {
    contentDiv.innerHTML = '<h1>🚀 OCIDM GPT Assistant is Live!</h1>';
  } else {
    console.error("❌ Element with ID 'content' not found.");
  }
});
