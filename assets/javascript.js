
function detail(id){
  location.href = `detail.html?id=${id}`;
}
function url(){
  location.href = ('https://www.hay88.one/?inviteCode=5829700');
}
$(document).ready(function(){
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
      loop: true,
      slidesPerView: '1',
      pagination: {
        el: '#swiper-pagination1',
      },

      navigation: {
        nextEl: '#swiper-button-next1',
        prevEl: '#swiper-button-prev1',
      },
      autoplay: {
        delay: 3000,
      }
    
    });
  const header = `
    <header class="top-0 w-full">
      <div class="header1 w-full bg-[#009fe3]">
        <div class="container mx-auto flex justify-between py-3 items-center">
          <div class="logo">
            <a href="index.html">
              <img
                class="max-w-[7rem]"
                src="./assets/images/cropped-logo-happyluke.png"
                alt="Logo"
              />
            </a>
          </div>
          <div class="hidden items-center gap-10 md:flex">
            <button class="Btn1 w-[18rem] h-[4rem] text-[1.8rem]">
              <a href="https://www.hay88.one/?inviteCode=5829700">Đăng Nhập</a>
            </button>
            <button class="Btn1 w-[18rem] h-[4rem] text-[1.8rem]">
              <a href="https://www.hay88.one/?inviteCode=5829700">Đăng Ký</a>
            </button>
          </div>
          <div class="menu-icon md:hidden">
            <label class="hamburger">
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div class="header2 backgroundanimation">
        <div class="container mx-auto">
          <div class="flex items-center gap-10 md:hidden justify-center py-3">
            <button class="Btn1 w-[14rem] h-[3rem] text-[1.8rem]">
              <a href="https://www.hay88.one/?inviteCode=5829700">Đăng Nhập</a>
            </button>
            <button class="Btn1 w-[14rem] h-[3rem] text-[1.8rem]">
              <a href="https://www.hay88.one/?inviteCode=5829700">Đăng Ký</a>
            </button>
          </div>
          <ul
            class="items-center text-white font-semibold text-2xl uppercase flex-wrap *:leading-10 hidden md:flex"
          >
            <li class="p-5 relative " data-page="index">
              <a href="index.html" class="tittle_navbar">Trang Chủ</a>
            </li>
            <li class="p-5 relative">
              <a href="dang ky happyluck.html" class="tittle_navbar"
                >Đăng ký HayppyLuck</a
              >
            </li>
            <li class="p-5 group relative">
              <a href="khuyen mai happpyluck.html" class="flex items-center">
                <div class="mr-1 tittle_navbar">Khuyến Mãi HayppyLuck</div>
              </a>
            </li>
            <li class="p-5 group relative">
              <a href="san pham.html" class="flex items-center">
                <div class="mr-1 tittle_navbar">Sản phẩm</div>
            </li>
            <li class="p-5 relative">
              <a href="gai thieu vai gai.html" class="tittle_navbar"
                >Gái Thiếu Vải</a
              >
            </li>
            <li class="p-5 relative">
              <a href="soi cau.html" class="tittle_navbar">Soi cầu</a>
            </li>
            <li class="p-5 relative">
              <a href="tin tuc.html" class="tittle_navbar">Tin tức</a>
            </li>
            <li class="p-5 relative">
              <a href="huong dan.html" class="tittle_navbar">Hướng dẫn</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- Side-bar mobile menu -->
    <div class="side-menu-mobile fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
      <ul class="w-[60vw] bg-slate-100 h-screen">
        <li class="">
          <a href="index.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">TRANG CHỦ</span>
          </a>
        </li>
        <li class="">
          <a  href="dang ky happyluck.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">ĐĂNG KÝ HAyPPYLUCK</span>
          </a>
        </li>
        <li>
          <button type="button" class="flex items-center w-full px-5 py-5 text-2xl font-semibold text-gray-900  rounded-lg group hover:bg-gray-200" >
            <a  href="khuyen mai happpyluck.html"  class="flex-1 ml-3 text-left whitespace-nowrap">KHUYẾN MÃI HAYPPYLUCK</a>
            <svg
              class="w-11 h-11 icon-dropdown-side-menu-mobile transition-all duration-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul  class=" sub-menu-side-menu-mobile  py-2 space-y-2  *:px-14 ">
            <li class="">
              <a href="https://www.hay88.one/?inviteCode=5829700" class="flex items-center w-full p-5 text-2xl font-medium text-gray-800  rounded-lg group hover:bg-gray-200 ">KHUYẾN MÃI HOÀN TRẢ</a>
            </li>
          </ul>
        </li>
        <li>
          <button  type="button"  class="flex items-center w-full px-5 py-5 text-2xl font-semibold text-gray-900 rounded-lg group hover:bg-gray-200">
            <a  href="./san pham.html" class="flex-1 ml-3 text-left whitespace-nowrap"  >SẢN PHẨM</a>
            <svg
              class="w-11 h-11 icon-dropdown-side-menu-mobile transition-all duration-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul class=" sub-menu-side-menu-mobile py-2 space-y-2 *:px-14">
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200 "
                >BACCARAT</a
              >
            </li>
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200 "
                >BLACKJACK</a
              >
            </li>
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200"
                >ROULETTE</a
              >
            </li>
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200"
                >RỒNG HỔ</a
              >
            </li>
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200"
                >ESPORTS</a
              >
            </li>
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200"
                >MẬU BINH</a
              >
            </li>
            <li>
              <a
                href="https://www.hay88.one/?inviteCode=5829700"
                class="flex items-center w-full p-5 text-2xl font-medium text-gray-800 transition duration-75 rounded-lg group hover:bg-gray-200"
                >BẦU CUA</a
              >
            </li>
          </ul>
        </li>
        <li class="">
          <a
            href="gai thieu vai gai.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">GÁI THIẾU VẢI</span>
          </a>
        </li>
        <li class="">
          <a
            href="./soi cau.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">SOI CẦU</span>
          </a>
        </li>
        <li class="">
          <a
            href="tin tuc.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">TIN TỨC</span>
          </a>
        </li>
        <li class="">
          <a
            href="Hướng dẫn.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">HƯỚNG DẪN</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- End Side bar mobile -->
  `;
  $("#header").html(header);
    const footer = `
        <footer class="bg-[#006997] pb-10">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-4xl font-bold">GIỚI THIỆU</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white">Hayppyluck chuyên trang cá cược thể thao, lô đề, casino, game slot… uy tín. Hayppyluck.xyz là đại lý chính thức của nhà cái Hayppyluck cung cấp đường link vào nhà cái không bị chặn, gửi tiền, rút tiền  nhanh chóng.</p>
              <ul class="list-disc *:text-white text-2xl pl-10">
                <li><p class="text-white">Tên DN : HayppyLuck</p></li>
                <li><p class="text-white">Địa chỉ: 23 P. Hoàng Đạo Thúy, Trung Hoà, Cầu Giấy, Hà Nội, Việt Nam</p></li>
                <li><p class="text-white">Website : https://HayppyLuck.xyz/</p></li>
              </ul>
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-4xl font-bold">HƯỚNG DẪN</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="huong dan.html">Hướng dẫn đăng ký</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="huong dan dang nhap .html">Hướng dẫn đăng nhập</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="huong dan gui tien.html">Hướng dẫn gửi tiền</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="huong dan rut tien.html">Hướng dẫn rút tiền</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="dai ly.html">Đại lý</a></p>
    
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-4xl font-bold">HƯỚNG DẪN</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="gioi thieu.html">Giới thiệu</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="chinh sach bao mat.html">Chính sách bảo mật</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="dieu khoan va dieu kien.html">Điều khoản và điều kiện</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="luat hoan tienchong rua tien.html">Luật hoàn tiền / chống rửa tiền</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="mien tru trach nhiem.html">Miễn trừ trách nhiệm</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="cau hoi thuong gap.html">Câu hỏi thường gặp</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="tac gai.html">Tác giả</a></p>
    
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-4xl font-bold">HƯỚNG DẪN</h1>
              <hr class="border-white border-t-[1px]">
              <div class="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15229.67428207065!2d106.63062363812031!3d10.812503615298978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1718092552842!5m2!1sen!2skh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    
            </div>
          </div>

      </div>
      </footer>
      <footer class="bg-[#002fc9]">
        <div class="container mx-auto">
          <div class="flex items-center justify-center gap-4 lg:gap-10 py-5 lg:py-7">
            <!-- <div class="flex w-full"> -->
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/9uexx5zz54d688ekinwmo1p0bsa7pl1f.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/69p64co31fnnbsni8hbvuww3e5d3omrh.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/a2bntyqq10nxzut05ydqcidvfpjb4ebz.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/d5k8ydowy5e2ixnbkjbxcfuc3g3n7ff8.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/eg8ru1tk3oil05a55cjsdhqzdpi24j3m.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/ia0wklxc85i8qchmvz71jkik6quhxxf3.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/suw1nhkk7as62sqg2ob1go2x96u6m2gw.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/w65nmdltrmwpjshaydqx8jxn7ysb5149.svg" alt=""></a>
              <a href=""><img class="hover:scale-125 duration-500 backdrop-blur-lg" src="./assets/images/z2g8l3jartyl1ct6ai52z8r0ccvaa0as.svg" alt=""></a>
            <!-- </div> -->
          </div>
        </div>
      </footer>
      <footer class="bg-slate-800">
        <div class="container mx-auto py-5 lg:py-7">
          <p class="text-center text-white">Bản quyền thuộc Hayppyluck – HayppyLuck.xyz</p>
        </div>
      </footer>
    `;

  $("#footer").html(footer);
  const backtotop = `<button class="Btn-backtotop1 backgroundanimation">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 
  const news_right = `<div class="border rounded-lg p-5 lg:p-10  ">
                <h5 class="text-[1.7rem] font-bold py-3">
                    TÌM KIẾM
                </h5>
                <hr class="border-t-[3px] border-blue-700 w-[10%]">
                
                <form class="max-w-full mx-auto py-3">
                    <div class="flex">
                        <div class="relative w-full">
                            <input type="search" class="block p-4 w-full z-20 text-2xl text-gray-900 rounded-lg  border   focus:ring-violet-300  border-gray-300" placeholder="Tìm kiếm …" required />
                            <button type="submit" class="absolute top-0 end-0 h-full p-5 text-sm font-medium text-white bg-[rgb(255,_136,_0)] rounded-e-lg   hover:bg-[rgb(255,85,0)] ">
                                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="border rounded-lg p-5 lg:p-10 mt-5 lg:mt-10">
                <h5 class="text-[1.7rem] font-bold py-3">
                    TÌM KIẾM
                </h5>
                <hr class="border-t-[3px] border-blue-700 w-[10%]">
                
                <div class="news-last mt-3 mb:-5 *:mb-7">
                    <div class="flex gap-5">
                        <div class="flex justify-center max-w-[10rem]  bg-center">
                            <a>
                            <img class="cursor-pointer"  onclick="detail(19)" class="object-cover w-full h-fit mt-2" src="./assets/images/tim-hieu-afk-la-gi-600x400.jpg" alt=""></a>
                        </div>
                        <div>
                            <p class="cursor-pointer" onclick="detail(19)" class="text-blue-700 hover:text-gray-800 duration-300"><a >AFK là gì? Vì sao các game thủ thường xuyên sử dụng cụm từ AFK? </a></p>
                            <p class="cursor-pointer"  onclick="detail(19)" class="flex items-center gap-2">
                                <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
                                <span class="text-xl">15 Tháng Chín, 2023</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex justify-center max-w-[10rem]  bg-center">
                            <a >
                            <img class="cursor-pointer" onclick="detail(20)" class="object-cover w-full h-fit mt-2" src="./assets/images/thuat-toan-sicbo-la-gi-600x400.jpg" alt=""></a>
                        </div>
                        <div>
                            <p class="cursor-pointer" onclick="detail(20)" class="text-blue-700 hover:text-gray-800 duration-300"><a >Tìm hiểu về thuật toán sicbo và cách áp dụng</a></p>
                            <p class="cursor-pointer" onclick="detail(20)" class="flex items-center gap-2">
                                <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
                                <span class="text-xl">8 Tháng Chín, 2023</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex justify-center max-w-[10rem]  bg-center">
                            <a >
                            <img class="cursor-pointer" onclick="detail(21)" class="object-cover w-full h-fit mt-2" src="./assets/images/Cach-choi-lo-to-don-gian-600x400.jpg" alt=""></a>
                        </div>
                        <div>
                            <p class="cursor-pointer" onclick="detail(21)" class="text-blue-700 hover:text-gray-800 duration-300"><a >Cách chơi lô tô online? Bật mí những mẹo chơi loto hay </a></p>
                            <p class="cursor-pointer" onclick="detail(21)" class="flex items-center gap-2">
                                <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
                                <span class="text-xl">1 Tháng Chín, 2023</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex justify-center max-w-[10rem]  bg-center">
                            <a >
                            <img class="cursor-pointer" onclick="detail(24)" class="object-cover w-full h-fit mt-2" src="./assets/images/cach-choi-tai-xiu-2-600x400.jpg" alt=""></a>
                        </div>
                        <div>
                            <p class="cursor-pointer" onclick="detail(24)" class="text-blue-700 hover:text-gray-800 duration-300"><a >Tài xỉu là trò chơi gì? Cách chơi tài xỉu tại hayppyluck.xyz</a></p>
                            <p class="cursor-pointer" onclick="detail(24)" class="flex items-center gap-2">
                                <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
                                <span class="text-xl">11 Tháng Tám, 2023</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex justify-center max-w-[10rem]  bg-center">
                            <a >
                            <img class="cursor-pointer" onclick="detail(25)" class="object-cover w-full h-fit mt-2" src="./assets/images/cach-choi-lien-minh-huyen-thoai-len-do-600x400.jpg" alt=""></a>
                        </div>
                        <div>
                            <p class="cursor-pointer" onclick="detail(25)" class="text-blue-700 hover:text-gray-800 duration-300"><a >Cách chơi Liên Minh Huyền Thoại hiệu quả tại hayppyluck.xyz </a></p>
                            <p class="cursor-pointer" onclick="detail(25)" class="flex items-center gap-2">
                                <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
                                <span class="text-xl">31 Tháng Năm, 2023</span>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>`;
  $("#news_right").html(news_right);


  $('.header2  ul.items-center > li').each(function() {
    a = $(this).find(".tittle_navbar").text();
    
    if(active == a){
      
      $(this).addClass('B');
    }
  });
  $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
    }
    else{
        $(this).addClass("active");
        $(".side-menu-mobile").removeClass("-translate-x-full");
    }
  });
  $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        $(".menu-icon").removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
      }
    });
    $(".icon-dropdown-side-menu-mobile").on("click", function(){
        $(this).toggleClass("rotate-180");
        $(this).closest("li").find('ul').toggleClass('active');
    })

    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });

});

