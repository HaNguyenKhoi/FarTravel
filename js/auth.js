// Xử lý Đăng ký
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;

    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không trùng khớp!');
      return;
    }

    let users = JSON.parse(localStorage.getItem('listUsers')) || [];

    if (users.some(u => u.email === email)) {
      alert('Email này đã được sử dụng!');
      return;
    }

    users.push({ email, password });
    localStorage.setItem('listUsers', JSON.stringify(users));

    alert('Đăng ký tài khoản thành công!');
    window.location.href = '../webpages/signin.html';
  });
}

// Xử lý Đăng nhập
const signinForm = document.getElementById('signin-form');
if (signinForm) {
  signinForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    let users = JSON.parse(localStorage.getItem('listUsers')) || [];
    const validUser = users.find(u => u.email === email && u.password === password);

    if (validUser) {
      alert('Đăng nhập thành công!');
      localStorage.setItem('currentUser', JSON.stringify(validUser));
      location.href = '../index.html';
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  });
}