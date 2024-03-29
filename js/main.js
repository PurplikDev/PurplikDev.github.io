const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting) {
                  entry.target.classList.add('visible');
            }
      });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((_element) => observer.observe(_element));