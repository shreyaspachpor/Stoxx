document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var togglePasswordIcon = document.getElementById('togglePassword');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var toggleConfirmPasswordIcon = document.getElementById('toggleConfirmPassword');

    function togglePasswordVisibility(input, icon) {
        var passwordType = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', passwordType);
        icon.classList.toggle('bi-eye');
        icon.classList.toggle('bi-eye-slash');
    }

    togglePasswordIcon.addEventListener('click', function() {
        togglePasswordVisibility(passwordInput, this);
    });

    toggleConfirmPasswordIcon.addEventListener('click', function() {
        togglePasswordVisibility(confirmPasswordInput, this);
    });
});
