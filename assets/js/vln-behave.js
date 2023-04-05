document.addEventListener("DOMContentLoaded", function () {
    const figures = document.querySelectorAll("figure");
    let figureNumber = 1;
    
    figures.forEach(function (fig) {
      const figcaption = fig.querySelector("figcaption");
      figcaption.textContent = `Figure ${figureNumber}: ${figcaption.textContent}`;
      fig.id = `figure${figureNumber}`;
      figureNumber++;
    });
  
    const figureRefs = document.querySelectorAll("[data-figure-ref]");
  
    figureRefs.forEach(function (ref) {
      const figureId = ref.getAttribute("data-figure-ref");
      const fig = document.getElementById(figureId);
  
      if (fig) {
        const figcaption = fig.querySelector("figcaption");
        ref.textContent = figcaption.textContent.split(":")[0];
        
        // Create a clickable link
        const link = document.createElement("a");
        link.href = `#${figureId}`;
        ref.parentNode.insertBefore(link, ref);
        link.appendChild(ref);
      }
    });
  });

// clickable figure
document.getElementById('modalTrigger').onclick = function() {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modalImage').src = this.src;
  }
  
  document.getElementsByClassName('modal-close')[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = "none";
    }
  }

document.addEventListener("DOMContentLoaded", function () {
    const latexElements = document.querySelectorAll(".latex");
    if (latexElements) {
      MathJax.typesetPromise(latexElements);
    }
  });