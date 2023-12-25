document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");

    // header
    var header = document.querySelector(".js__header");
    // change tab
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");

    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");

    // slide
    var threePointFiveSlides = document.querySelectorAll(
        ".js__swiperThreePointFiveContainer"
    );
    var autoSlides = document.querySelectorAll(".js__swiperAutoContainer");
    var gallerryPictures = document.querySelectorAll(
        ".js__swiperGalleryContainerPicture"
    );
    var galleryVideos = document.querySelectorAll(
        ".js__swiperGalleryContainerVideo"
    );
    var oneSlides = document.querySelectorAll(".js__swiperOneContainer");
    var fiveSlides = document.querySelectorAll(".js__swiperFiveContainer");

    function switchTab(tabId, idOne, idTwo) {
        document.getElementById(tabId).classList.add("active");
        document
            .getElementById(tabId === idOne ? idTwo : idOne)
            .classList.remove("active");

        document
            .getElementById("pane-" + tabId.split("-")[1])
            .classList.add("active");
        document
            .getElementById(
                "pane-" + tabId.split("-")[1] === "pane-" + idOne.split("-")[1]
                    ? "pane-" + idTwo.split("-")[1]
                    : "pane-" + idOne.split("-")[1]
            )
            .classList.remove("active");
    }

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // change tab
            if (tabOne) {
                tabOne.onclick = function () {
                    switchTab("tab-1", "tab-1", "tab-2");
                };
            }
            if (tabTwo) {
                tabTwo.onclick = function () {
                    switchTab("tab-2", "tab-2", "tab-1");
                };
            }

            // submenu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var menu = subMenu.querySelector(".js__subMenu");
                    var showSubMenu = subMenu.querySelector(".js__showSubMenu");
                    var closeSubMenu =
                        subMenu.querySelector(".js__closeSubMenu");

                    showSubMenu.onclick = function () {
                        menu.classList.add("active");
                        bodyEle.classList.add("overflow-hidden");
                    };
                    closeSubMenu.onclick = function () {
                        menu.classList.remove("active");
                        bodyEle.classList.remove("overflow-hidden");
                    };
                });
            }

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },
        // slider one
        sliderOneItems: function () {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperOnes");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 18,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },
        // slider three point five
        sliderThreePointFiveItems: function () {
            threePointFiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThreePointFive");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 18,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 3.5,
                        },
                    },
                });
            });
        },
        // slider five
        sliderFiveItems: function () {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperFives");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 70,
                        },
                    },
                });
            });
        },
        // slider auto
        sliderAutoItems: function () {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: "auto",
                            spaceBetween: 30,
                        },
                    },
                });
            });
        },
        // slider gallery picture
        sliderGalleryPictureItems: function () {
            gallerryPictures.forEach((item) => {
                var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
                var sliderSmall = item.querySelector(".js__swiperGallerySmall");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");

                var small = new Swiper(sliderSmall, {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    loopedSlides: 4,
                    breakpoints: {
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1024: {
                            slidesPerView: 4.5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                        },
                    },
                });
                var large = new Swiper(sliderLarge, {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });

                small.controller.control = large;
                large.controller.control = small;
            });
        },
        // slider gallery video
        sliderGalleryVideoItems: function () {
            galleryVideos.forEach((item) => {
                var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
                var sliderSmall = item.querySelector(".js__swiperGallerySmall");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");

                var small = new Swiper(sliderSmall, {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    breakpoints: {
                        640: {
                            spaceBetween: 20,
                        },
                        768: {
                            spaceBetween: 20,
                        },
                        1024: {
                            spaceBetween: 30,
                        },
                        1200: {
                            spaceBetween: 30,
                        },
                    },
                });
                var large = new Swiper(sliderLarge, {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });

                small.controller.control = large;
                large.controller.control = small;
            });
        },
        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;

            if (header) {
                const isSticky = scrollY > 50;
                if (isSticky !== this.isSticky) {
                    header.classList.toggle("sticky", isSticky);
                    this.isSticky = isSticky;
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // slider one
            this.sliderOneItems();
            // slider three point five
            this.sliderThreePointFiveItems();
            // slider five
            this.sliderFiveItems();
            // slider auto
            this.sliderAutoItems();
            // slider gallery picture
            this.sliderGalleryPictureItems();
            // slider gallery video
            this.sliderGalleryVideoItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
