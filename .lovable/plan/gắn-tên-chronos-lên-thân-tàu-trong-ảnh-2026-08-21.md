# Gắn tên CHRONOS lên thân tàu trong ảnh

## Vấn đề
Ảnh hero slide 1 (`chronos-slide-1.jpg`) có dòng chữ nhòe, vô nghĩa trên thân tàu ("DCGRDEI IMSLEI" — do ảnh dựng AI). Slide 2 cũng có một dòng chữ tương tự trên mạn tàu. Các ảnh nội thất (slide 3, 4) không có chữ.

## Cách xử lý
1. Rà toàn bộ ảnh có thân tàu: 4 ảnh hero slide + nhóm `exterior-01…06` và `deck-*` trong thư viện — phóng to vùng mạn tàu để xác định ảnh nào có chữ.
2. Với mỗi ảnh có chữ: dùng công cụ chỉnh sửa ảnh AI để thay dòng chữ đó bằng **CHRONOS CRUISE** đúng vị trí, giữ nguyên góc nhìn, phối cảnh, ánh sáng và phần còn lại của ảnh (không tạo ảnh mới).
3. Kiểm tra từng ảnh sau khi sửa bằng cách phóng to vùng chữ; nếu chữ méo hoặc sai chính tả, chỉnh lại lần nữa. Nếu sau vài lần vẫn không ra chữ sạch, phương án dự phòng là xóa hẳn chữ để thân tàu trắng trơn và báo lại cho bạn.
4. Ghi đè file ảnh cũ (giữ nguyên tên) để không phải sửa code, sau đó chụp lại trang chủ để xác nhận hiển thị đúng.

## Chi tiết kỹ thuật
- File chỉnh sửa: `src/assets/chronos-slide-1.jpg`, `chronos-slide-2.jpg` (chắc chắn), cộng các ảnh exterior/deck phát hiện thêm sau bước rà soát.
- Dùng `imagegen--edit_image` trên ảnh gốc (không dùng generate mới) để giữ nguyên con tàu.
- Ảnh xuất ra được resize về đúng kích thước gốc (2560px chiều rộng cho slide) và nén JPEG để không tăng dung lượng trang.
- Không thay đổi code component; chỉ thay nội dung file ảnh.
