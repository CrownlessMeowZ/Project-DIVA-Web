/* ============================================================
   IMAGE PREVIEW - Interactive Photo Gallery
   Yêu cầu 1: Dùng Interactive Photo Gallery làm điểm xuất phát
   Hoạt động trên cả 3 trang bằng cách kiểm tra id của body
   ============================================================ */

/* Lưu lại nội dung gốc của khung preview để dùng cho hàm undo */
const defaultText = "Hover over an image below to display here.";
const defaultBg = "";

/* ============================================================
   Hàm upDate: cập nhật khung preview khi hover/focus vào ảnh
   Yêu cầu 2: dùng alt text của ảnh làm chú thích
   ============================================================ */
function upDate(previewPic) {
    /* console.log để kiểm tra sự kiện có kích hoạt không */
    console.log("upDate triggered");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    /* Lấy khung preview và caption theo id */
    const imageDiv = document.getElementById("image");
    /* Lấy thẻ caption bên dưới khung để hiện tên ảnh */
    const captionDiv = document.getElementById("image-caption");

    /* Đổi background của khung thành ảnh đang hover/focus */
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    /* Thêm class active để viền đổi màu hồng khi có ảnh */
    imageDiv.classList.add("active");
    /* Đổi chữ caption bên dưới thay vì đè lên ảnh */
    captionDiv.textContent = previewPic.alt;
}

/* ============================================================
   Hàm undo: reset khung preview về trạng thái ban đầu
   Dùng cho onmouseleave và onblur
   ============================================================ */
function undo() {
    console.log("undo triggered");

    /* Lấy khung preview và caption theo id */
    const imageDiv = document.getElementById("image");
    const captionDiv = document.getElementById("image-caption");

    /* Reset background về rỗng */
    imageDiv.style.backgroundImage = "url('')";
    /* Xóa class active để viền trở về nét đứt xanh */
    imageDiv.classList.remove("active");

    /* Reset chữ caption về nội dung gốc */
    captionDiv.textContent = defaultText;
}

/* ============================================================
   Yêu cầu 8: Hàm onload — gọi khi trang tải xong
   Thêm tabindex cho tất cả ảnh để hỗ trợ keyboard navigation
   ============================================================ */
function addTabIndex() {
    /* console.log để kiểm tra sự kiện onload có kích hoạt không */
    console.log("addTabIndex triggered - page loaded");

    /* Yêu cầu 9b: for loop duyệt qua từng ảnh trong nav.links */
    const imgs = document.querySelectorAll("nav.links img");

    for (let i = 0; i < imgs.length; i++) {
        /* Yêu cầu 9c: thêm tabindex để ảnh nhận focus từ bàn phím */
        imgs[i].setAttribute("tabindex", i + 1);
        console.log("tabindex set:", i + 1, "for", imgs[i].alt);
    }
}

/* ============================================================
   Yêu cầu 8: Gắn onload vào window — chạy addTabIndex khi trang tải xong
   ============================================================ */
window.onload = addTabIndex;

/* ============================================================
   GẮN SỰ KIỆN cho tất cả ảnh trong nav.links
   Yêu cầu 6: thêm onfocus và onblur bên cạnh onmouseover và onmouseleave
   Yêu cầu 7: test mouse movement
   Yêu cầu 10: test keyboard access
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
    /* Lấy tất cả ảnh trong nav.links */
    const imgs = document.querySelectorAll("nav.links img");

    imgs.forEach(function (img) {
        /* Yêu cầu 6 + 7: onmouseover — di chuột vào ảnh → hiện preview */
        img.addEventListener("mouseover", function () {
            upDate(this);
        });

        /* Yêu cầu 6 + 7: onmouseleave — di chuột ra khỏi ảnh → reset preview */
        img.addEventListener("mouseleave", function () {
            undo();
        });

        /* Yêu cầu 6 + 10: onfocus — nhấn Tab đến ảnh → hiện preview (keyboard) */
        img.addEventListener("focus", function () {
            console.log("focus triggered:", this.alt);
            upDate(this);
        });

        /* Yêu cầu 6 + 10: onblur — Tab rời khỏi ảnh → reset preview (keyboard) */
        img.addEventListener("blur", function () {
            console.log("blur triggered:", this.alt);
            undo();
        });
    });
});