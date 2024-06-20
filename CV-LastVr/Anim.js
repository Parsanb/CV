document.addEventListener('DOMContentLoaded', () => {
    const signatureImage = document.getElementById('signatureImage');

    signatureImage.addEventListener('mouseover', () => {
        signatureImage.style.transform = 'scale(1.5)';
    });

    signatureImage.addEventListener('mouseout', () => {
        signatureImage.style.transform = 'scale(1)';
    });
});
