# Lộ trình cải thiện Zenova Cruise website

## Tình trạng hiện tại
- Homepage đang ở dạng teaser "sắp ra mắt" với form nhận thông tin sớm.
- Form tuyển dụng đã kết nối backend và có trang admin xem đơn.
- Navigation đã được tổ chức lại với nhóm Dịch vụ / Không gian trên tàu.
- Ảnh hiện tại là ảnh AI-generated/placeholder, chưa phải ảnh thật của du thuyền.
- Chưa có ngày khai trương cụ thể.

## Mục tiêu tổng thể
Cải thiện thiết kế tổng thể trước, đồng thời xây dựng nền tảng kỹ thuật để thay ảnh và mở rộng tính năng sau này một cách nhanh chóng, không phá vỡ cấu trúc.

## Phase 1: Xác định hướng thiết kế mới
- Chụp màn hình toàn bộ homepage hiện tại.
- Dựa trên thương hiệu du thuyền 6 sao, đề xuất 3 hướng thiết kế khác nhau (cùng tone sang trọng nhưng khác nhau về bố cục, độ tương phản, và cách sử dụng không gian trắng).
- Người dùng chọn 1 hướng để triển khai.

## Phase 2: Nâng cấp design system
- Cập nhật `src/styles.css`: tinh chỉnh màu sắc zenova, thêm tokens về bóng đổ, khoảng cách, border radius, và transition.
- Chuẩn hóa typography: đảm bảo Cormorant Garamond dùng cho heading, Jura cho body, rõ ràng scale h1-h6.
- Tạo các component UI dùng chung (section header, card, button variants) để đảm bảo nhất quán toàn site.
- Kiểm tra độ tương phản và responsive trên mobile/tablet.

## Phase 3: Chuẩn bị nền tảng ảnh (ready cho việc thay ảnh sau)
- Tạo cấu trúc thư mục ảnh rõ ràng: `src/assets/hero/`, `src/assets/gallery/`, `src/assets/cabins/`, `src/assets/services/`.
- Viết script tối ưu ảnh tự động (resize, compress, chuyển định dạng WebP/AVIF nếu cần) để khi có ảnh thật chỉ cần chạy 1 lệnh.
- Thay thế các đường dẫn ảnh hardcoded bằng cấu hình tập trung, dễ thay đổi.
- Đảm bảo mọi ảnh đều có `alt` text đầy đủ và lazy loading đúng cách.

## Phase 4: Rebuild layout theo hướng đã chọn
- Hero: cải thiện typography, overlay, animation, form early access.
- Các section chính: giới thiệu ngắn, gallery "First Glimpses", form báo giá, tuyển dụng.
- Footer: làm sạch và nhất quán với design mới.
- Đảm bảo giữ nguyên navigation và các trang con hiện có.

## Phase 5: Mở rộng tính năng phù hợp trạng thái "sắp ra mắt"
- Nâng cấp form early access: lưu vào backend, gửi thông báo, có trang admin xem danh sách.
- Hoàn thiện form báo giá: kết nối backend, gửi thông báo cho admin.
- Bổ sung trang "Coming soon" đẹp mắt cho các tính năng chưa mở (nếu cần).
- Chuẩn bị cấu trúc cho booking flow khi có ngày khai trương.

## Phase 6: SEO, performance và polish
- Cập nhật meta tags, Open Graph, JSON-LD cho tất cả các routes.
- Tối ưu Core Web Vitals: lazy load ảnh, giảm CLS, tối ưu font loading.
- Kiểm tra lại toàn bộ links, form validation, trạng thái success/error.
- Chạy typecheck (`tsgo`) và build (`bun run build`) sạch.

## Phase 7: QA và bàn giao
- Preview trên desktop và mobile.
- Kiểm tra switch ngôn ngữ VI/EN.
- Đảm bảo không có console error.
- Chuẩn bị checklist để người dùng tự thay ảnh khi có ảnh thật.

## Kỹ thuật
- Không thêm dependency mới trừ khi cần thiết cho animation/image optimization.
- Sử dụng Tailwind CSS v4 và design tokens sẵn có.
- Giữ nguyên route tree và cấu trúc TanStack Start.
- Mọi thay đổi backend (nếu có) tuân thủ RLS và GRANT policies.

## Kiểm tra sau mỗi phase
- `bun run build:dev` hoặc `tsgo` sạch.
- Preview hiển thị đúng trên desktop và mobile.
- Không có console error.
