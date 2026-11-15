document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Chống reload trang

  // 1. Lấy dữ liệu từ các ô input trong form
  const name = document.getElementById('client-name').value;
  const email = document.getElementById('client-email').value;
  const rating = document.getElementById('client-rating').value;
  const message = document.getElementById('client-message').value;
  const time = new Date().toLocaleString(); // Lấy thời gian gửi

  // 2. Gom thành 1 đối tượng đánh giá
  const feedbackData = {
    name: name,
    email: email,
    rating: rating,
    message: message,
    time: time
  };

  // 3. Lấy danh sách đánh giá cũ từ localStorage (nếu có)
  let listFeedbacks = JSON.parse(localStorage.getItem('farTravelFeedbacks')) || [];

  // 4. Thêm phản hồi mới vào danh sách
  listFeedbacks.push(feedbackData);

  // 5. Lưu ngược lại vào localStorage của trình duyệt
  localStorage.setItem('farTravelFeedbacks', JSON.stringify(listFeedbacks));

  // 6. Thông báo và reset form
  alert('Cảm ơn bạn! Đánh giá của bạn đã được hệ thống lưu lại thành công.');
  document.getElementById('feedback-form').reset();
});



// Tạo 1 biến tên element để tham chiếu đến phần tử body
let element = document.body;
// Sử dụng phương thức classList.toggle() để thêm hoặc xóa lớp "dark-mode" từ phần tử body
const toggleDarkMode = () => {
    element.classList.toggle("dark-mode");
}