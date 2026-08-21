# Form tuyển dụng trên homepage

## Mục tiêu
Thêm một section tuyển dụng ngắn gọn ngay dưới hero (khối "Nhận thông báo đầu tiên"), trước phần ảnh hé lộ.

## Nội dung section
- Eyebrow: "TUYỂN DỤNG" / "CAREERS"
- Tiêu đề: "Gia nhập đội ngũ Zenova" / "Join the Zenova crew"
- Mô tả ngắn: tàu sắp ra mắt, đang tuyển các vị trí vận hành.
- Form tối giản 3 trường:
  - Họ tên
  - Số điện thoại / Email
  - Vị trí ứng tuyển (select, lấy từ `jobPositions` trong `careers-data.ts`: buồng phòng, nhà hàng, lễ tân, hướng dẫn viên)
- Nút submit: "Gửi hồ sơ" / "Apply now"
- Xử lý: validate client-side (bắt buộc 3 trường), submit hiện toast cảm ơn rồi reset — chưa lưu dữ liệu.
- Link phụ: "Xem tất cả vị trí" trỏ tới `/careers`.

## Thiết kế
- Nền sáng (`bg-zenova-ivory`) để tách khỏi hero tối, dùng `Reveal` cho animation vào.
- Card viền mảnh, input theo style `field-underline` như QuoteForm; nút vàng `zenova-gold`, bo vuông.
- Responsive: 3 trường xếp dọc trên mobile, grid 3 cột trên desktop.

## Kỹ thuật
- Tạo `src/components/landing/RecruitTeaser.tsx`.
- Render trong `src/components/landing/LandingPage.tsx` giữa `<Hero />` và `<Gallery />`.
- Thêm khối dịch `recruitTeaser` (vi + en) vào `src/lib/translations.ts` và interface `Translations`.
- Dùng `Select` của shadcn nếu đã có, nếu chưa thì dùng `<select>` gốc style theo token.
- Không đổi route, không thêm dependency, không đụng trang `/careers`.

## Kiểm tra
- `bunx tsgo` và `bun run build:dev` sạch.
- Preview desktop + mobile, chuyển VI/EN, submit thấy toast, không có console error.
