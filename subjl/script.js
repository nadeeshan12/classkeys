// නොටිෆිකේෂන් අතුරුදහන් වීම
document.querySelector('.notification').addEventListener('click', function() {
    this.style.display = 'none';
});

// පාඩම් ලින්ක් වලට අතිරේක අන්තර්ක්‍රියාකාරීත්වය
document.querySelectorAll('.lesson-list a').forEach(link => {
    link.addEventListener('click', function() {
        alert('පාඩම් පිටුව විවෘත වෙමින් පවතී...');
    });
});