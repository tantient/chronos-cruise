# Dùng logo dạng khối trên – chữ dưới

## Hiện trạng

Component `ChronosLogo` đã có sẵn hai biến thể:

- `inline`: khối biểu tượng bên trái, chữ bên phải — đang dùng ở header.
- `stacked`: khối biểu tượng ở trên, chữ CHRONOS CRUISE ở dưới — **đã viết nhưng chưa nơi nào dùng**.

Footer có `import { ChronosLogo }` nhưng không render nó; thay vào đó chỉ hiển thị dòng chữ "CHRONOS" thuần văn bản, nên phần biểu tượng khối (Hòn Trống – Hòn Mái + thủy ba) không xuất hiện ở đâu ngoài header.

## Thay đổi đề xuất

1. **Footer**: thay khối chữ "CHRONOS" bằng `ChronosLogo` biến thể `stacked`, bật tagline "HA LONG BAY · LAN HA BAY", căn giữa, kích thước tương đương hiện tại (cao khoảng 88–96px), màu theo token `text-chronos-sand-900`. Bỏ dòng tagline trùng lặp nếu logo đã hiển thị.
2. **Header**: giữ biến thể `inline` (khối bên trái, chữ bên phải) vì thanh nav chỉ cao 80px — logo xếp dọc sẽ bị bóp nhỏ khó đọc. Nếu bạn muốn header cũng xếp dọc, mình sẽ tăng chiều cao header lên 96–104px và thu nhỏ chữ cho cân.
3. **Rà soát**: kiểm tra các nơi khác hiển thị tên thương hiệu bằng chữ thuần (hero, trang careers/contact nếu có) để dùng logo đúng biến thể.

## Chi tiết kỹ thuật

- Chỉ sửa `src/components/landing/Footer.tsx` (và `Header.tsx` nếu bạn chọn phương án header xếp dọc).
- Không đổi cấu trúc `ChronosLogo`; chỉ truyền props `variant="stacked"`, `showTagline`, `className`.
- Kiểm tra lại bằng ảnh chụp preview ở cả desktop và mobile, sáng/tối.
