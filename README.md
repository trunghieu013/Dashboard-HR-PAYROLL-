# Hệ Thống Quản Lý Nhân Sự & Lương (HR-PAYROLL)

Hệ thống quản lý nhân sự và lương tích hợp, được phát triển với các công nghệ hiện đại. Giải pháp toàn diện cho doanh nghiệp để quản lý nhân viên, phòng ban, chấm công và thanh toán lương.

## Tính Năng

- **Quản lý nhân viên**: Thêm, sửa, xóa, xem thông tin nhân viên
- **Quản lý phòng ban**: Tổ chức và quản lý cấu trúc phòng ban
- **Hệ thống lương**: Quản lý lương, phụ cấp, và các khoản khấu trừ
- **Báo cáo & Thống kê**: Tạo và xuất báo cáo tổng quan
- **Cảnh báo & Thông báo**: Nhận thông báo về các sự kiện quan trọng
- **Quản lý chấm công**: Theo dõi giờ làm việc và nghỉ phép
- **Bảo mật**: Hệ thống phân quyền và xác thực người dùng

## Công Nghệ Sử Dụng

### Frontend

- React.js
- Vite
- React Router
- Axios
- Bootstrap

### Backend

- Node.js
- Express.js
- MySQL
- JWT Authentication

## Cài Đặt và Chạy

### Yêu Cầu

- Node.js (v14+)
- MySQL
- Git

### Bước 1: Clone Repository

```bash
git clone https://github.com/trunghieu013/Dashboard-HR-PAYROLL-.git
cd Dashboard-HR-PAYROLL-
```

### Bước 2: Cài Đặt Dependencies

#### Backend (Server)

```bash
cd server
npm install
```

#### Frontend (Dashboard)

```bash
cd dashboard
npm install
```

### Bước 3: Cấu Hình Môi Trường

#### Backend

Tạo file `.env` trong thư mục `server` với các biến môi trường sau:

```
DB_HOST=          # Địa chỉ máy chủ cơ sở dữ liệu
DB_USER=          # Tên người dùng cơ sở dữ liệu
DB_PASSWORD=      # Mật khẩu cơ sở dữ liệu
DB_NAME=          # Tên cơ sở dữ liệu
JWT_SECRET=       # Khóa bí mật cho JWT
PORT=             # Cổng cho máy chủ (mặc định: 9000)
```

#### Frontend

Tạo file `.env` trong thư mục `dashboard`:

```
VITE_API_URL=     # URL của API backend (ví dụ: http://localhost:3000)
```

### Bước 4: Chạy Ứng Dụng

#### Backend

```bash
cd server
npm start
```

#### Frontend

```bash
cd dashboard
npm run dev
```                                     
