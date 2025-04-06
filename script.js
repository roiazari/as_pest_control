function toggleInfo(element) {
    const card = element.closest('.bug-card');
    card.classList.toggle('expanded');
    if (card.classList.contains('expanded')) {
      element.innerHTML = "סגור &larr;";
    } else {
      element.innerHTML = "למד עוד &rarr;";
    }
  }


  function toggleCard(cardElement) {
    // מחליף/מוסיף את המחלקה flipped על הכרטיס
    cardElement.classList.toggle('flipped');
  }
  
  