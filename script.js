function downloadResume() {
    const link = document.createElement('a');
    link.href = 'fuhaid_alajmi_resume_090624.pdf'; // Replace with the path to your CV file
    link.download = 'fuhaid_alajmi_Resume.pdf'; // Set the desired file name
    link.click();
  }
  
//Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the form and show the thank-you message
    document.getElementById('contactForm').classList.add('contact-hidden');
    document.getElementById('thankYouMessage').classList.remove('contact-hidden');
});
