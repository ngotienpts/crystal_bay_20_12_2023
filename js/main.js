document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    // header
    var header = document.querySelector(".js__header");
    // change tab
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");

    // slide
    var threePointFiveSlides = document.querySelectorAll(
        ".js__swiperThreePointFiveContainer"
    );
    var autoSlides = document.querySelectorAll(".js__swiperAutoContainer");

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
            // if (tabOne) {
            //     tabOne.onclick = function () {
            //         switchTab("tab-1", "tab-1", "tab-2");
            //     };
            // }
            // if (tabTwo) {
            //     tabTwo.onclick = function () {
            //         switchTab("tab-2", "tab-2", "tab-1");
            //     };
            // }

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },
        // slider three point five
        sliderThreePointFiveItems: function () {
            threePointFiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThreePointFive");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 3.5,
                    spaceBetween: 18,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
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
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                    },
                });
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
            // slider three point five
            this.sliderThreePointFiveItems();
            // slider auto
            this.sliderAutoItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
