# Sắp xếp lại menu Dịch vụ và nav chính

## Mục tiêu
Menu Dịch vụ hiện gộp chung 4 dịch vụ thật với 2 mục thiên về không gian/ngoại thất. Kế hoạch tách nhóm rõ ràng, rút gọn tên hiển thị và bổ sung Giới thiệu / Liên hệ vào nav chính.

## Dropdown "Dịch vụ" chia 2 nhóm

```text
DỊCH VỤ                    KHÔNG GIAN TRÊN TÀU
Ẩm thực                    Sảnh & không gian chung
Giải trí                   Ngoại thất du thuyền
Spa & Wellness
Hồ bơi & Sundeck
```

- Mỗi nhóm có tiêu đề nhỏ (chữ in hoa, màu nhạt, không bấm được).
- Dropdown desktop mở rộng thành 2 cột; trên mobile hiển thị tuần tự theo nhóm.
- Link và trang chi tiết `/services/{id}` giữ nguyên, không đổi URL.

## Tên hiển thị ngắn gọn

Chỉ đổi nhãn trong menu; tiêu đề trong trang chi tiết giữ nguyên tên đầy đủ.

| Trang chi tiết (giữ nguyên) | Nhãn menu (VI / EN) |
| --- | --- |
| Nhà hàng Panorama | Ẩm thực / Dining |
| Giải trí & Sky Lounge | Giải trí / Entertainment |
| Spa & Chăm sóc sức khoẻ | Spa & Wellness / Spa & Wellness |
| Boong tắm nắng & Hồ bơi | Hồ bơi & Sundeck / Pool & Sundeck |
| Sảnh chính & Không gian chung | Sảnh & không gian chung / Public Spaces |
| Ngoại thất du thuyền | Ngoại thất / Exterior |

## Nav chính

Thứ tự mới: Hành trình · Phòng · Dịch vụ · Thư viện · Ưu đãi · Giới thiệu · Liên hệ, giữ nút đặt chỗ ở bên phải.

- Nav desktop hiện chỉ bật từ breakpoint `xl`; thêm 2 mục nữa sẽ chật hơn nên sẽ giảm nhẹ khoảng cách và cỡ chữ để vừa một hàng.
- Menu mobile bổ sung cùng 2 mục, đặt dưới nhóm dịch vụ.

## Chi tiết kỹ thuật

- `src/components/services/services-data.ts`: thêm trường `group` (`service` | `space`) và `menuNameVi` / `menuNameEn` cho từng dịch vụ.
- `src/components/landing/Header.tsx`: dựng dropdown theo nhóm (desktop 2 cột, mobile theo nhóm), thêm link `/about` và `/contact` vào cả nav desktop lẫn menu mobile.
- `src/lib/translations.ts`: bổ sung nhãn nhóm dropdown (`servicesGroup`, `spacesGroup`) cho vi/en; các khoá `nav.about`, `nav.contact` đã có sẵn nên tái sử dụng.
- Không thay đổi route, dữ liệu nội dung trang dịch vụ hay backend.
