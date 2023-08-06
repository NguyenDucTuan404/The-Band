
// Buy Ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// Hàm hiển thị form modal mua vé (thêm class open vào modal)
function showBuyTickers() {
  modal.classList.add('open')
}
// Hàm ẩn form modal mua vé (gỡ bỏ class open khỏi modal)
function hideBuyTickers() {
  modal.classList.remove('open')
}

// Lập qua từng thẻ button và nghe hành vi click 
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickers)
}

// Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickers)

// Nghe hành vi click vào modal(khoảng trắng) thực hiện close
modal.addEventListener('click', hideBuyTickers)

// Nghe hành vi click khi click vào form buy-ticket không bị ẩn form buy-ticket của modal
modalContainer.addEventListener('click', function(event) {
  event.stopPropagation()
})


// Mobile Menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

//  đóng / mở mobile menu
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#navbar li a[href *= "#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  }
}
