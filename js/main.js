document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");

    // header
    var header = document.querySelector(".js__header");
    // change tab
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const tabThree = document.getElementById("tab-3");
    const tabFor = document.getElementById("tab-4");
    const tabFive = document.getElementById("tab-5");

    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");

    // sidebar
    const sidebarContainer = document.querySelector(".js__sidebarContainer");

    // fancybox
    var fancyboxes = document.querySelectorAll(".fancybox-full");

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
    var oneCardSlides = document.querySelectorAll(
        ".js__swiperOneCardContainer"
    );
    var threeSlides = document.querySelectorAll(".js__swiperThreeContainer");
    var fiveSlides = document.querySelectorAll(".js__swiperFiveContainer");
    var videoLibrarySlides = document.querySelectorAll(
        ".js__swiperVideoLibraryContainer"
    );

    function switchTab(tabId, ...otherTabIds) {
        document
            .querySelectorAll("[id^='tab-']")
            .forEach((tab) => tab.classList.remove("active"));
        document
            .querySelectorAll("[id^='pane-']")
            .forEach((pane) => pane.classList.remove("active"));

        const currentTab = document.getElementById(tabId);
        currentTab.classList.add("active");

        const tabIndex = Array.from(
            document.querySelectorAll("[id^='tab-']")
        ).indexOf(currentTab);

        const currentPane =
            document.querySelectorAll("[id^='pane-']")[tabIndex];
        currentPane.classList.add("active");

        const otherTabIdsArray = otherTabIds.map(
            (id) => "tab-" + id.split("-")[1]
        );

        document.querySelectorAll("[id^='tab-']").forEach((tab) => {
            if (otherTabIdsArray.includes(tab.id)) {
                tab.classList.remove("active");
                document
                    .getElementById("pane-" + tab.id.split("-")[1])
                    .classList.remove("active");
            }
        });
    }

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // change tab
            if (tabOne) {
                tabOne.onclick = function () {
                    switchTab("tab-1", "tab-2");
                };
            }
            if (tabTwo) {
                tabTwo.onclick = function () {
                    switchTab("tab-2", "tab-1");
                };
            }
            if (tabThree) {
                tabThree.onclick = function () {
                    switchTab("tab-3", "tab-4", "tab-5");
                };
            }
            if (tabFor) {
                tabFor.onclick = function () {
                    switchTab("tab-4", "tab-5", "tab-3");
                };
            }
            if (tabFive) {
                tabFive.onclick = function () {
                    switchTab("tab-5", "tab-4", "tab-3");
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
        // sticky sidebar
        stickySlidebar: function () {
            if (sidebarContainer) {
                var leftSide =
                    sidebarContainer.querySelector(".js__leftSidebar");
                var rightSide =
                    sidebarContainer.querySelector(".js__rightSidebar");
                $(leftSide, rightSide).theiaStickySidebar({
                    containerSelector: sidebarContainer,
                    additionalMarginTop: 200,
                    additionalMarginBottom: 20,
                });
            }
        },
        // fancybox
        fancybox: function () {
            if (fancyboxes) {
                fancyboxes.forEach(function (fancybox) {
                    $(".fancybox-full a").fancybox();
                });
            }
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
        // slider one card
        sliderOneCardItems: function () {
            oneCardSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperOneCards");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    effect: "cards",
                    grabCursor: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },
        // slider video library
        sliderVideoLibraryItems: function () {
            videoLibrarySlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperVideoLibrary");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 18,
                    centeredSlides: true,
                    loop: true,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    },
                });
            });
        },
        // slider three
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThrees");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
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
                    freeMode: true,
                    watchSlidesProgress: true,
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
                    thumbs: {
                        swiper: small,
                    },
                });

                // small.controller.control = large;
                // large.controller.control = small;
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
                    freeMode: true,
                    watchSlidesProgress: true,
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
                    thumbs: {
                        swiper: small,
                    },
                });

                // small.controller.control = large;
                // large.controller.control = small;
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
            // sticky sidebar
            this.stickySlidebar();
            // fancybox
            this.fancybox();
            // slider one
            this.sliderOneItems();
            // slider one card
            this.sliderOneCardItems();
            // slider video library
            this.sliderVideoLibraryItems();
            // slider three
            this.sliderThreeItems();
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
