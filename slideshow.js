class SimpleSlideshow {
    constructor(elementID, images) {
        this.container = document.getElementById(elementID);
        this.captionElement = this.container.querySelector(".caption");
        this.prevButton = this.container.querySelector(".prev");
        this.nextButton = this.container.querySelector(".next");
        this.images = images;
        this.index = 0;

        this.render();
        this.attachEvents();
    }

    render() {
        if (!this.slides || this.slides.length === 0) {
            this.images.forEach((img, i) => {
                const imageElement = document.createElement("img");
                imageElement.src=img.url;
                imageElement.alt = img.caption || "";
                imageElement.className = i === 0 ? "active" : "";
                this.container.insertBefore(imageElement, this.captionElement);
            });

            this.slides = this.container.querySelectorAll("img"); 
        }

        this.captionElement.innerHTML = this.images[this.index].caption || "";
    }

    attachEvents() {
        this.prevButton.addEventListener("click", () => this.showPrevious());
        this.nextButton.addEventListener("click", () => this.showNext());
    }

    showPrevious() {
        this.slides[this.index].classList.remove("active");
        this.index = (this.index - 1 + this.slides.length) % this.slides.length;
        this.slides[this.index].classList.add("active");
        this.captionElement.innerHTML = this.images[this.index].caption || "";
    }

    showNext() {
        this.slides[this.index].classList.remove("active");
        this.index = (this.index + 1) % this.slides.length;
        this.slides[this.index].classList.add("active");
        this.captionElement.innerHTML = this.images[this.index].caption || "";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new SimpleSlideshow("photos-slideshow", [
        { url: "media/20250401_162758.jpg", 
            caption: "Photo from one of my photoshoots."
        }, 
        {
            url: "media/20250408_201137.gif",
            caption: "The player animation for my Game Design I final."
        },
        {
            url: "media/20250415_222954.jpg",
            caption: "My makeup design for Gay Prom in Spring 2025."
        },
        {
            url: "media/20250429_100805 (1).jpg",
            caption: "My tiger makeup with a prosthetic nose for my makeup class, Spring 2025."
        },
        {
            url: "media/20250531_212325.jpg",
            caption: "A photo of the moon that I took."
        },
        {
            url: "media/20250601_173847.jpg",
            caption: "Makeup design for fun."
        },
        {
            url: "media/20250716_104040.jpg",
            caption: "My dog, Indigo, learning how to swim."
        },
        {
            url: "media/20250925_150359.jpg",
            caption: "Yet another makeup design for fun."
        },
        {
            url: "media/20251017_164355.jpg",
            caption: "Dark Crystal puppet at the Center For Puppet Arts in Atlanta, GA."
        },
        {
            url: "media/20251017_164625.jpg",
            caption: "<i>Ghostbusters'</i> Slimer at the Center For Puppet Arts."
        },
        {
            url: "media/20251030_190733.jpg",
            caption: "The final scores when I beat my friend in lasertag."
        },
        {
            url: "media/Catapult_20250225153036.png",
            caption: "The Catapult for my first team game in Game Design I, <i>Warden's Gambit</i>."
        },
        {
            url: "media/Fireball_20250305102841.png",
            caption: "The Good Mage's fireball in <i>Warden's Gambit</i>."
        },
        {
            url: "media/Screen_Recording_20251019_211326_Snapchat.jpg",
            caption: "A picture from my and my friend's performance at JSU's Cocky Guerrilla in October, 2025. The photo also features the Jack Skellington outfit I made."
        },
        {
            url: "media/Screenshot_20251030_211451_Snapchat.jpg",
            caption: "A photo of me, as Jack Skellington, with a ball I won from a claw machine."
        },
        {
            url: "media/Screenshot_20251120_134912_Photos.jpg",
            caption: "Axe throwing for the first time. I enjoy many different forms of weaponry."
        },
        {
            url: "media/Snapchat-408391979.jpg",
            caption: "My friends and I going to see <i>Sinners</i> in theaters."
        },
        {
            url: "media/Snapchat-1115469371.jpg",
            caption: "Me and my friends in Atlanta, GA. "
        },
        {
            url: "media/Snapchat-1329888123.jpg",
            caption: "Hail, Big bird."
        },
        {
            url: "media/Snapchat-2098291950.jpg",
            caption: "Me, lost in Mason Hall at JSU."
        },
        {
            url: "media/Snapchat-2115941071.jpg",
            caption: "A meme of my friend that I made."
        }
    ]);
});



/*(function(jQuery) {
    function init() {
        if (window.wSlideshow) {
            window.wSlideshow.render({
                element: "photos-slideshow", 
                nav: "thumbnails", 
                navLocation: "bottom", 
                captionLocation: "bottom", 
                transition: "slide", 
                autoplay: "0", 
                speed: "3", 
                aspectRatio: "3.2", 
                showControls: "true", 
                randomStart: "false", 
                images: [
                    {
                        url: "media/Screenshot_20251116_091934_Photos.jpg",
                        width: "568",
                        height: "800", 
                        caption: "YES"
                    }
                ]
            });
        }
    }

    jQuery(document).ready(init);
})(window.jQuery);*/