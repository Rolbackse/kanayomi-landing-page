## Blog's Kanayomi
Blog kanayomi được xây dựng trên nền tảng Jekyll, và theme được base trên `mediumish`.

## Publish article

Sau khi viết bài xong thì dùng lệnh sau để đăng bài.

```
python dev.py
```

## Đăng bài

Để đăng một bài lên blog, mọi người sẽ tạo một file mới trong thư mục `docs/_posts`. Tên file có định dạng như sau:

```
yyyy-mm-dd-sample-title.md
```

Ví dụ:

```
2019-03-02-bai-viet-dau-tien.md
```

### Nội dung file
#### Tiêu đề

Phần đầu tiên của 1 file luôn có định dạng như sau.

```
---
layout: post
title:  "bài viết đầu tiên"
author: toannv
categories: [ Tiếng nhật, học tiếng nhật, japanese, kanatyomi ]
image: static/images/1.jpg
featured: true
hidden: true
---
```

Trong đó:

|name| explain | sample |
|---|---|---|
|layout|là loại laypot mà bài viết sử dụng. Có các loại layout là: `post`, `default`, `archive`. Thường các bài viết sẽ sử dụng layout `post`|post|
|title| Tiêu đề của bài viết |bài viết đầu tiên|
|author|Tác giả bài viết|toannv|
|categories|Bài viết thuộc vào category nào, các category được viết trong dấu ngoặc vuông `[]`, và được cách nhau bằng dấu phẩy(`,`)|[Tiếng nhật, học tiếng nhật, japanese, kanatyomi]|
|image|cover photo của bài viết, các hình ảnh của bài viết được chứa trong thư mục `static/images`, hoặc một đường link trực tiếp đến bức ảnh đó|static/images/1.jpg|
|featured|trường xác định bài viết có nằm trong top các bài viết nổi bật hay không. `true` là có, `false` là không|true|
|hidden|trường xác định bài viết có hiển thị vào list các bài viết của blog hay không. `true` là có, `false` là không. Khi bài viết chưa được duyệt hoặc viết nháp thì trường này phải set là `false`|false|

### Quy tắc viết bài

#### Tiêu đề
Các lớp tiêu đề h1,h2,h3 cho đến h6 có thể viết được bằng cách thêm số lượng ký tự # tương ứng vào đầu dòng. Một ký tự # tương đương với h1, 2 ký tự # tương đương với h2 ... Tuy vậy để viết một bài viết dễ đọc thì hiếm khi cần dùng đến quá 3 ký tự này.

```
# Header h1
## Header h2
### Header h3
```

#### Bôi đậm và in nghiêng
Kẹp một từ ở đầu và cuối bằng 1 ký tự `*` để *in nghiêng*, 2 ký tự `**` để **bôi đậm**, và 3 ký tự `***` để vừa ***in nghiêng vừa bôi đậm***.
Nếu muốn bạn có thể dùng gạch dưới `_` thay cho dấu sao `*`.

```
**Bold** and *italic* and ***both***.
__Bold__ and _talic_ and ___both___
```

Ngoài ra chữ có thể ~~gạch ngang~~ bằng 2 dấu `~~`.

```
~~strike me~~
```

#### Link
Viết link trong markdown bằng cách cho alt text vào trong ngoặc vuông `[]` và link thật vào trong ngoặc đơn `()`. Ví dụ như link đến trang [blog](https://kanayomi.com) của chúng ta.

```
[blog](https://kanayomi.com)
```

Ngoài ra, bạn có thể thêm tiêu đề cho link bằng cách thêm `"title"` trong mô tả bên trong ngoặc đơn `()`.

```
[blog](https://kanayomi.com "Đọc báo tiếng nhật")
```

#### Hình ảnh

Chèn hình ảnh trong markdown chỉ khác với chèn link đôi chút. Bạn thêm ký tự `!` vào đầu tiên, sau đó ghi alt text và link ảnh vào trong ngoặc vuông `[]` và ngoặc đơn `()`.

```
![Kanayomi](https://blog.kanayomi.com/static/images/jumbotron.jpg)
```

Và đây là kết quả:

![Kanayomi](https://blog.kanayomi.com/static/images/jumbotron.jpg)

#### Định dạng danh sách

Để định đạng một đoạn văn bản thành các gạch đầu dòng trong markdown, bạn dùng ký tự `*` và một dấu cách ở mỗi ý và dùng thêm 2 dấu cách ở đằng trước nếu muốn lùi vào một level.

```
* Java
* PHP
  * Laravel
  * Symfony
  * Phalcon
* Python
  * Flask
     * Jinja2
     * WSGI1.0
  * Django
```

Và kết quả:

* Java
* PHP
  * Laravel
  * Symfony
  * Phalcon
* Python
  * Flask
     * Jinja2
     * WSGI1.0
  * Django

Nếu bạn muốn dùng số để đánh dấu thì viết số và một dấu chấm `.`
```
1. number one
2. number two
3. number three
```

Kết quả đây:

1. number one
2. number two
3. number three

#### Trích dẫn
Cách viết một trích dẫn giống hệt khi bạn vẫn trả lời bình luận hay dẫn chứng trong các diễn đàn: sử dụng ký tự `>`.

```
> Kanayomi là một ứng dụng tuyệt vời.
```

Kết qủa nhé:

> Kanayomi là một ứng dụng tuyệt vời.


#### Mã code

Có 2 loại code có thể viết trong markdown: inline code (code trong dòng) và code block (đoạn code riêng). Inline code dùng `ký tự phẩy ngược`.

```
Inline code dùng `ký tự phẩy ngược`.
```

còn code block dùng 3 `ký tự phẩy ngược kẹp ở đầu và đuôi của 1 đoạn`. Khi bạn muốn cú pháp hiển thị chính xác với ngôn ngữ của đoạn code thì có thể thêm định danh ngôn ngữ ở 3 ký tự phẩy ngược mở đoạn như dưới đây.

```
còn code block dùng 3 `ký tự phẩy ngược kẹp ở đầu và đuôi của 1 đoạn`. Khi bạn muốn cú pháp hiển thị chính xác với ngôn ngữ của đoạn code thì có thể thêm định danh ngôn ngữ ở 3 ký tự phẩy ngược mở đoạn như dưới đây.
```

#### Bảng
Vẽ bảng trong Markdown sẽ hơi khó nếu bạn chưa quen. Các cột được tách nhau bằng dấu ngăn thẳng đứng `|` và header được tách với content bằng dấu gạch ngang `-`.

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

Kết quả:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

#### Link tài liệu tham khảo

Markdown được thiết kế để dễ nhìn ngay ở định dạng tự nhiên. Vì vậy bạn có thể đánh dấu mỗi link thành từng số và viết tất cả link thực tương ứng với các số ở cuối cùng.

```
Let's check out [Wikipedia][1] and [Google][2].
...
...
[1]: https://en.wikipedia.org "Wikipedia"
[2]: https://www.google.com "Google"
```

#### Chú thích
Chú thích hay footnote sẽ dùng ký tự `^` bên trong ngoặc vuông `[]` để đánh dấu và viết lại giải thích ở cuối, cách viết tương tự như link tài liệu tham khảo bên trên.

```
John Gruber[^1].
...
...
[^1]: writer, blog publisher, UI designer, the inventor of the Markdown publishing format.
```


#### Đăng video từ youtube
Trong nội dung bài viết sử dụng quy tắc sau để nhúng video từ youtube

```
{% youtube "link video" %}
```

Ví dụ:

```
{% youtube "https://www.youtube.com/watch?v=5iZ0kSRpdVo" %}
```

#### Viết tiếng Nhật có furigana

Furigana được viết theo format sau:
```
[日本語|にほんご]
```

 sau khi viết bài xong thì sẽ chạy lệnh `python dev.py` đểu render furigana và publish post.

## push bài lên github

Thêm mới các file thay đổi.

```
git add -A
```

Nếu có thêm file vào thư mục static thì cần phải dùng câu lệnh sau:

```
git add -A -f docs/static
```

Commit và push lên github

```
git commit -m "đăng bài viết xxx"
git push origin
```

Sau push xong khoảng 1-2 phút bạn có thể vào trang web để xem bài mới viết.

## Tài khoản post bài

các tài khoản post bài được định nghĩa trong file `docs/_config.yml`

```
authors:
  toannv:    => tên này là tên được sử dụng trong file post bài.
    name: toannv
    display_name: toannv
    avatar: /static/images/toannv.jpeg
    email: toannv@kanayomi.com
    web: https://toannv.me
    description: "developer, living in Tokyo, got married"
```

|name| explain | sample |
|---|---|---|
|name|tên của tác giả|toannv|
|display_name|tên hiển thị lên blog|toannv|
|avatar|đường dẫn đến avatar của tác giả|/static/images/toannv.jpeg|
|email|Email của tác giả|toannv@kanayomi.com|
|web|trang web cá nhân của tác giả|https://toannv.me|
|description|status để hiển thị bên cạnh avatar|developer, living in Tokyo, got married|

--- The end ---
