// الحصول على عناصر DOM الخاصة بـ login
const loginForm = document.getElementById('loginForm');
const loginMessageElement = document.getElementById('loginMessage');

// إضافة حدث عند إرسال الفورم
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إرسال الفورم بشكل تقليدي

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // التحقق من وجود مدخلات
    if (!username || !password) {
        loginMessageElement.textContent = 'يرجى ملء جميع الحقول.';
        loginMessageElement.style.color = 'red';
        return;
    }

    // إذا كانت البيانات صحيحة
    loginMessageElement.textContent = 'تم تسجيل الدخول بنجاح!';
    loginMessageElement.style.color = 'green';

    // يمكن إضافة هنا كود لتخزين البيانات أو إرسالها إلى السيرفر
    loginForm.reset();
    window.location.href = 'index.html'; // إعادة تعيين الفورم بعد النجاح
});