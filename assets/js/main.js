document.addEventListener('DOMContentLoaded', () => {
  const postsList = document.getElementById('posts-list');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  fetch('content/posts.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load posts.json');
      return response.json();
    })
    .then((posts) => {
      if (!Array.isArray(posts)) throw new Error('Invalid posts data');
      posts.sort((a, b) => (a.date < b.date ? 1 : -1));
      for (const post of posts) {
        const li = document.createElement('li');
        li.className = 'post-item';

        const titleLink = document.createElement('a');
        titleLink.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
        titleLink.textContent = post.title;
        const title = document.createElement('h2');
        title.className = 'post-title';
        title.appendChild(titleLink);

        const meta = document.createElement('div');
        meta.className = 'post-meta';
        const time = document.createElement('time');
        time.dateTime = post.date;
        try {
          const dateObj = new Date(post.date);
          time.textContent = dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
        } catch (_e) {
          time.textContent = post.date;
        }
        meta.appendChild(time);

        if (Array.isArray(post.tags) && post.tags.length > 0) {
          const tags = document.createElement('span');
          tags.className = 'post-tags';
          tags.textContent = ' • ' + post.tags.join(', ');
          meta.appendChild(tags);
        }

        const excerpt = document.createElement('p');
        excerpt.className = 'post-excerpt';
        excerpt.textContent = post.excerpt || '';

        li.appendChild(title);
        li.appendChild(meta);
        li.appendChild(excerpt);
        postsList && postsList.appendChild(li);
      }
    })
    .catch((error) => {
      const li = document.createElement('li');
      li.textContent = 'Failed to load posts. ' + error.message;
      postsList && postsList.appendChild(li);
    });
});

