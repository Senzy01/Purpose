// --- Stories Page (page3.html) Modal & Submission Logic ---
  const addStoryBtn = document.getElementById('addStoryBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const submitStoryBtn = document.getElementById('submitStoryBtn');
  const storyCardsContainer = document.getElementById('storyCardsContainer');
  const storyText = document.getElementById('storyText');
  const storyAuthor = document.getElementById('storyAuthor');

  if (
    addStoryBtn &&
    modalOverlay &&
    closeModalBtn &&
    submitStoryBtn &&
    storyCardsContainer
  ) {
    // Open modal
    addStoryBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'flex';
      storyText.value = '';
      storyAuthor.value = '';
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });

    // Submit story
    submitStoryBtn.addEventListener('click', () => {
      const text = storyText.value.trim();
      const author = storyAuthor.value.trim() || 'Anonymous';

      if (text.length > 0) {
        const div = document.createElement('div');
        div.className = 'story-card';
        div.innerHTML = `
          <p class="story-quote">"${text}"</p>
          <p class="story-author">— ${author}</p>
        `;
        storyCardsContainer.prepend(div);
        modalOverlay.style.display = 'none';
      }
    });

    // Close modal if clicking outside
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  }

