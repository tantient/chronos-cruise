Quyết định: Giữ nguyên logo dạng inline ở header

- Header hiện tại đã sử dụng `ChronosLogo variant="inline"` (khối biểu tượng bên trái + wordmark bên phải) với chiều cao `h-8`.
- Footer đã sử dụng `ChronosLogo variant="stacked"` (khối biểu tượng ở trên + chữ CHRONOS CRUISE ở dưới) với chiều cao `h-24`.

Lý do giữ nguyên:
- Thanh header chỉ cao 80px (`h-20`), dạng stacked sẽ bị nén nhỏ và khó đọc.
- Dạng inline tiết kiệm chiều cao, phù hợp với navigation bar.
- Footer rộng và có đủ không gian dọc để stacked hiển thị rõ nét, tạo điểm nhấn bộ nhận diện.

Hành động: Không cần thay đổi code. Giữ cấu hình hiện tại.