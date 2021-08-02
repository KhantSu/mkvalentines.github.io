//////// Self Info Session ////////

var selfInfoArray = [
  {
    id: "1",
    img: "/img/coco.jpg",
    person_header: "M for MTK",
    gender_icon: "/img/man.png",
    about:
      "Howdy! I'm Min Thu Kyaw, a tech guy! Khant Su says that I'm prettygood at technology field. Also, she says \"Not just the word. Pretty good is enough, You're perfect Darling\"...",
    facts: "Khant Su calls me: Coco, Darling, Unicorn, Khant Su's hero",
    facts2:
      "<label>Loves for Khant Su: </label><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-ellipsis-h'></i><img src='/img/infinite.png'/>",
    characteristics:
      "Characteristics: Cute Smile, Plump lips, Every movements can melt KhantSu's heart <i class='fas fa-heart'></i>",
  },
  {
    id: "2",
    img: "/img/baby1.jpg",
    person_header: "K for KSYW",
    gender_icon: "/img/woman.png",
    about:
      "Hey! My name is Khant Su Yin Win, a dream chaser. You can also call me Kyle. Fashion, Coding and Coco are kinda drug for me!",
    facts: "Coco MTK calls me: Baby, Chit Sone, Baby Unicorn",
    facts2:
      "<label>Loves for Coco MTK: </label><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-ellipsis-h'></i><img src='/img/infinite.png'/>",
    characteristics:
      "Characteristics: Sweet Smile, Ability to Melt Coco MTK's heart <i class='fas fa-heart'></i>",
  },
];

var selfinfoContainer = document.getElementById("self_info");

selfInfoArray.forEach(function (count) {
  selfinfoContainer.innerHTML +=
    "<div class='col-lg-6 col-12 person'" +
    count.id +
    "><div class='photo'" +
    count.id +
    "><img src=" +
    count.img +
    " width='100px' /></div><div class='info info'" +
    count.id +
    "><fieldset><legend><span class='person_header'>" +
    count.person_header +
    "<img src=" +
    count.gender_icon +
    " /></span></legend><p>" +
    count.about +
    "<br /><br /><span class='mtk_facts'>" +
    count.facts +
    "</span><br /><br /><span class='mtk_facts'>" +
    count.facts2 +
    "</span><br /><br /><span>" +
    count.characteristics +
    "</span> </p></fieldset></div></div>";
});

////// Self Info Session End ///////
