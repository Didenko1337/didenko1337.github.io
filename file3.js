window.onload = function () {
    let form = document.getElementById("form");
    let kukaracha = document.getElementById("count");
    let article1 = document.getElementById("article1");
    let article2 = document.getElementById("article2");
    let article3 = document.getElementById("article3");
    let start = document.getElementById("items");
    let cbox1 = document.getElementById("cbox1");
    let cbox2 = document.getElementById("cbox2");
    let cbox3 = document.getElementById("cbox3");
    let temp = 0;

    function cost(id) {
        let ord = kukaracha.value;
        if (/^\d+$/.test(ord) && ord >= 0) {
            ord = Number(ord);
            let s = 0;
            let ss;
            switch (id) {
            case 1:
                s = ord * article1.getAttribute("price");
                break;
            case 2:
                ss = start.options[start.selectedIndex];
                s = ord * ss.getAttribute("price");
                break;
            case 3:
                s = ord * article3.getAttribute("price");
                if (cbox1.checked) {
                    s += ord * cbox1.getAttribute("price");
                }
                if (cbox2.checked) {
                    s += ord * cbox2.getAttribute("price");
                }
                if (cbox3.checked) {
                    s += ord * cbox3.getAttribute("price");
                }
                break;
            }
            document.getElementById("result").innerHTML = s;
        } else {
            document.getElementById("result").innerHTML = "Неверно" +
            " введено количество товаров";
        }
    }

    article1.addEventListener("click", function () {
        document.getElementById("start").classList.add("hide");
        document.getElementById("cbox").classList.add("hide");
        temp = 1;
        cost(1);
    });
    article2.addEventListener("click", function () {
        document.getElementById("start").classList.remove("hide");
        document.getElementById("cbox").classList.add("hide");
        temp = 2;
        cost(2);
    });
    article3.addEventListener("click", function () {
        document.getElementById("start").classList.add("hide");
        document.getElementById("cbox").classList.remove("hide");
        temp = 3;
        cost(3);
    });

    start.addEventListener("change", function () {
        cost(2);
    });

    cbox1.addEventListener("click", function () {
        cost(3);
    });
    cbox2.addEventListener("click", function () {
        cost(3);
    });
    cbox3.addEventListener("click", function () {
        cost(3);
    });

    kukaracha.addEventListener("input", function () {
        cost(temp);
    });

    form.addEventListener("submit", function (QTE) {
        QTE.preventDefault();
    });
};