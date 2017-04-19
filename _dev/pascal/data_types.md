---
title: Các kiểu dữ liệu
---

Kiểu dữ liệu của một thực thể chỉ ra ý nghĩa của thực thể đó kèm theo các ràng buộc, giá trị, cách thức lưu trữ và các lệnh xử lý đi kèm với nó.

## Phân loại

Kiểu dữ liệu có thể được phân loại với các dạng sau:
- Các kiểu vô hướng: 
	+ Kiểu dữ liệu chuẩn: số nguyên, số thực, logic, kí tự.
	+ Do người dùng định nghĩa: miền con, kiệt kê.
- Các kiểu dữ liệu có cấu trúc được tạo ra từ các kiểu dữ liệu vô hướng: mảng, chuỗi, bản ghi, tập tin và tập hợp.
- Kiểu dữ liệu con trỏ: *chúng ta sẽ tìm hiểu sau*.

## Khai báo kiểu dữ liệu

Khai báo kiểu được sử dụng nhằm xác định kiểu dữ liệu mới dùng khi khai báo biến. Cú pháp khai báo kiểu là

```
Type Tên_Kiểu_1, Tên_Kiểu_2 = Kiểu_dữ_liệu;
```
{: .sh_pascal }

Ví dụ sau đâu định nghĩa các kiểu dữ liệu mới:
- Kiểu dữ liệu `dates` và `age` là kiểu số nguyên.
- Kiểu dữ liệu `yes` và `ok` là kiểu logic.
- Kiểu dữ liệu `name` và `city` là kiểu chuỗi.
- Kiểu dữ liệu `fees`, `expenses` là kiểu số thực.

```
Type days, age = integer;
     yes, ok = boolean;
     name, city = string;
     fees, expenses = real;
```
{: .sh_pascal }

## Kiểu số nguyên

Danh sách tên các kiểu số nguyên cùng với khoản giá trị của chúng trong Pascal:

|   Kiểu	   |  Tối thiểu		|   Tối đa		|   Định dạng		 |
|--------------|----------------|---------------|--------------------|
|   Integer	   |  -2147483648	|   2147483647	|   Có dấu 32-bit	 |
|   Cardinal   |  0				|   4294967295	|   Không dấu 32-bit |
|   Shortint   |  -128			|   127			|   Có dấu 8-bit	 |
|   Smallint   |  -32768		|   32767		|   Có dấu 16-bit	 |
|   Longint	   |  -2147483648	|   2147483647	|   Có dấu 32-bit	 |
|   Int64	   |  -2^63			|   2^63 - 1	|   Có dấu 64-bit	 |
|   Byte	   |  0				|   255			|   Không dấu 8-bit	 |
|   Word	   |  0				|   65535		|   Không dấu 16-bit |
|   Longword   |  0				|   4294967295	|   Không dấu 32-bit |
{: .table .table-bordered }

## Hằng số

Sử dụng hằng số làm cho một chương trình dễ đọc, dễ sửa đổi hơn. Pascal hỗ trợ các hằng số thuộc kiểu số, logic, chuỗi và các ký tự. Hằng số có thể được khai báo trong phần khai báo của chương trình bằng từ khoá `Const`.

Cú pháp của khai báo hằng:

```
Const Tên_hằng = Giá_Trị;
```
{: .sh_pascal }

Sau đây là một số ví dụ về khai báo hằng:

```
VELOCITY_LIGHT = 10;
PIE = 3.141592;
NAME = 'Stuart Little';
CHOICE = true;
OPERATOR = '+';
```
{: .sh_pascal }

Tất cả các khai báo hằng phải được để trước khai báo biến.

## Kiểu liệt kê

Kiểu liệt kê là các kiểu dữ liệu do người dùng tự định nghĩa. Chúng cho phép các giá trị được liệt kê trong một danh sách. Chỉ cho phép các toán tử gán và các toán tử quan hệ trên kiểu dữ liệu liệt kê. Các kiểu dữ liệu được khai báo như sau:

```
Type Tên_kiểu_liệt_Kê = (giá_trị_1, giá_trị_2, giá_trị_3, ...)
```
{: .sh_pascal }

Sau đây là một số ví dụ về khai báo kiểu liệt kê:

```
Type SUMMER = (April, May, June, July, September);
     COLORS = (Red, Green, Blue, Yellow, Magenta, Cyan, Black, White);
     TRANSPORT = (Bus, Train, Airplane, Ship);
```
{: .sh_pascal }

Các giá trị trong danh sách liệt kê có thứ thự đúng như thứ tự chúng được khai báo. Kiểu liệt kê không hỗ trợ dạng số hoặc chuỗi kí tự.

## Kiểu miền con

Các kiểu miền con dùng để khai báo các biến có giá trị nằm trong một dải nhất định. Ví dụ, nếu là tuổi thì nên nằm giữa 18 đến 100 năm, một biến tuổi (age) có thể được khai báo là:

```
Var age: 18 ... 100;
```
{: .sh_pascal }

Chúng ta cũng có thế tự tạo ra 1 kiểu dữ liệu sử dụng miền con. Cú pháp để khai báo kiểu dữ liệu miền con là:

```
Type Tên_kiểu_miền_con = giới_hạn_dưới ... giới_hạn_trên;
```
{: .sh_pascal }

Sau đây là ví dụ về khai báo biến sử dụng kiểu miền con:

```
Const P = 18;
      Q = 90;
Type Number = 1 ... 100;
     Value = P ... Q;
```
{: .sh_pascal }

Các kiểu miền con cũng có thể được tạo ra từ một khoảng của một kiểu liệt kê đã được khai báo từ trước. Ví dụ:

```
Type months = (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec);
     summer = Apr ... Aug;
     winter = Oct ... Dec;
```
{: .sh_pascal }