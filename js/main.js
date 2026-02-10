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



const projects = document.querySelectorAll('.currentProject');
for(let i = 0; i < projects.length; i++) {
      if(i % 2 == 1) {
            projects[i].classList.add('left')
      } else {
            projects[i].classList.add('right')
      }
}