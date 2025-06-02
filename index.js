
document.addEventListener('DOMContentLoaded', function () {
    // Open modal on button click
    document.querySelectorAll('.open-modal-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Close modal on close button click
    document.querySelectorAll('.close-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });
document.getElementById('downloadBtn').addEventListener('click', function () {
    const element = document.querySelector('.resume-card');
    const opt = {
        margin:       0.3,
        filename:     'Akash_Chauhan_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});
    // Close modal when clicking outside modal content
    document.querySelectorAll('.modal').forEach(function(modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                
            }
        });
    });
});
