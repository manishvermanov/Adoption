const processCarousel = document.getElementById("process-carousel");
  const cards = document.querySelectorAll(".process-card");
  const nextBtn = document.querySelector(".process-btn.next");
  const prevBtn = document.querySelector(".process-btn.prev");

  let currentIndex = 0;

  function updateActiveCard() {
    cards.forEach((card, index) => {
      card.classList.toggle("active", index === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateActiveCard();
      processCarousel.scrollBy({ left: 260, behavior: "smooth" });
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateActiveCard();
      processCarousel.scrollBy({ left: -260, behavior: "smooth" });
    }
  });

  // Initial call to highlight the first card
  updateActiveCard();

//   document ends/faq start

const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close other items
      faqItems.forEach((i) => {
        if (i !== item) i.classList.remove("open");
      });

      // Toggle current
      item.classList.toggle("open");
    });
  });