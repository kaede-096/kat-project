let currentIndex = 0;
      const containers = document.querySelectorAll('.video-container');

      function showVideo(index) {
        containers.forEach((container, i) => {
          container.classList.toggle('active', i === index);
        });
      }

      function nextVideo() {
        currentIndex = (currentIndex + 1) % containers.length;
        showVideo(currentIndex);
      }

      function prevVideo() {
        currentIndex = (currentIndex - 1 + containers.length) % containers.length;
        showVideo(currentIndex);
      }