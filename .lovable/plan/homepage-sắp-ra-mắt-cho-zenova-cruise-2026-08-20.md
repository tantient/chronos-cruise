# Homepage "Sắp ra mắt" cho Zenova Cruise

## Mục tiêu
Tái thiết kế phần homepage (`/`) thành một landing page bí ẩn, hiện đại và năng động, thông báo du thuyền chưa khai trương, đồng thời thu thập thông tin khách hàng quan tâm. Giữ nguyên toàn bộ navigation và các trang con hiện có.

## Giữ nguyên
- Header/Navigation với các link đến `/itineraries`, `/cabins`, `/gallery`, `/offers`, `/services/*`, `/contact`, `/careers`, `/about`.
- Footer hiện tại.
- Routing và cấu trúc route tree.
- Design system cơ bản (màu zenova, font Cormorant Garamond + Jura, dark mode).

## Thay đổi chi tiết

### 1. Hero section mới — Teaser "Sắp ra mắt"
- Thay thế `src/components/landing/Hero.tsx` bằng một hero teaser.
- Layout: full viewport, background là ảnh vịnh Hạ Long / Lan Hạ hiện có (slide hoặc ảnh đơn) với overlay gradient tối đậm hơn hiện tại.
- Typography lớn, centered:
  - Eyebrow: "SẮP RA MẮT" / "COMING SOON" (màu zenova-gold).
  - Headline: "ZENOVA CRUISE" hoặc "HÀNH TRÌNH SẮP BẮT ĐẦU" / "THE VOYAGE BEGINS SOON".
  - Subheadline ngắn, bí ẩn: "Một trải nghiệm 6 sao đang được chuẩn bị giữa vịnh Hạ Long và Lan Hạ." / "A six-star experience is being prepared between Ha Long Bay and Lan Ha Bay."
- Không dùng countdown vì chưa có ngày cụ thể.
- Hiệu ứng: text reveal từng dòng, subtle Ken Burns trên background, glow nhẹ trên headline.

### 2. Form đăng ký nhận thông tin sớm
- Đặt form ngay trong hero, dưới subheadline.
- Các trường: Họ tên, Email hoặc Số điện thoại (chỉ 2-3 trường, tối giản).
- Nút CTA: "Nhận thông báo đầu tiên" / "Be the first to know".
- Trạng thái success: thông báo ngắn "Cảm ơn bạn. Zenova sẽ liên hệ sớm." / "Thank you. Zenova will reach out soon."
- Xử lý form: client-side validation đơn giản, hiện tại chưa cần kết nối backend (có thể lưu vào state hoặc console log). Nếu cần lưu trữ thực sẽ bổ sung sau khi thảo luận.

### 3. Section hé lộ hình ảnh
- Giữ hoặc thay thế `Gallery.tsx` bằng một section ngắn (3-4 ảnh) với tiêu đề "Những góc nhìn đầu tiên" / "First glimpses".
- Ảnh có hiệu ứng hover zoom nhẹ, caption mờ ảo.

### 4. QuoteForm / CTA phụ
- Giữ nguyên `QuoteForm.tsx` như một CTA phụ: "Muốn nhận báo giá sớm?" / "Want an early quote?".
- Có thể điều chỉnh nội dung cho phù hợp với ngữ cảnh "sắp ra mắt".

### 5. Nội dung đa ngôn ngữ
- Cập nhật `src/lib/translations.ts`: thêm các key mới cho hero teaser, form early access, section hé lộ.
- Đảm bảo cả tiếng Việt và tiếng Anh đều có bản dịch.

### 6. Head metadata
- Cập nhật `src/routes/index.tsx` head: title và description phản ánh trạng thái sắp ra mắt.

## Kỹ thuật
- Chỉnh sửa: `src/components/landing/LandingPage.tsx`, `src/components/landing/Hero.tsx`, `src/lib/translations.ts`, `src/routes/index.tsx`.
- Có thể tách hero mới thành `src/components/landing/TeaserHero.tsx` nếu cần tái sử dụng.
- Không thay đổi route tree, không xóa trang con, không thêm dependency mới trừ khi cần thiết cho animation.
- Sử dụng Tailwind CSS và design token sẵn có; animation có thể dùng CSS keyframes hoặc Motion for React nếu đã có trong project.

## Kiểm tra sau triển khai
- `bun run build:dev` hoặc `tsgo` typecheck sạch.
- Preview homepage hiển thị đúng ở cả desktop và mobile.
- Switch ngôn ngữ VI/EN hoạt động.
- Navigation vẫn link đến các trang con bình thường.
- Không có console error.
