// الحصول على عناصر DOM الخاصة بـ register
const registerForm = document.getElementById('registerForm');
const registerMessageElement = document.getElementById('registerMessage');

// إضافة حدث عند إرسال الفورم
registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إرسال الفورم بشكل تقليدي

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // التحقق من أن كلمة المرور تؤكد بشكل صحيح
    if (password !== confirmPassword) {
        registerMessageElement.textContent = 'كلمات المرور غير متطابقة!';
        registerMessageElement.style.color = 'red';
        return;
    }

    // التحقق من وجود مدخلات
    if (!username || !password) {
        registerMessageElement.textContent = 'يرجى ملء جميع الحقول.';
        registerMessageElement.style.color = 'red';
        return;
    }

    // إذا كانت البيانات صحيحة
    registerMessageElement.textContent = 'تم إنشاء الحساب بنجاح!';
    registerMessageElement.style.color = 'green';

    // يمكن إضافة هنا كود لتخزين البيانات أو إرسالها إلى السيرفر
    registerForm.reset();
    window.location.href = 'login.html'; // إعادة تعيين الفورم بعد النجاح
});