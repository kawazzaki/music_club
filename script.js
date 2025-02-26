document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo(0, 0);
});
window.addEventListener("load", function () {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
});
//dk chi li lfo9 mn chatgpt nsit ach kidir 


let text1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus aliquam mollitia ex excepturi quo! Explicabo cupiditate soluta magni, itaque facere odit rem? Maxime obcaecati eaque tenetur veniam illum odit?";
let text2 = "jlkfhgdslkj;ghsdjfk;lsdajglkkia sgjiea jgriojsfdg kjfdlkgj dsagnlkd fjkgkdfsj ngkfdjglka jksdjfglk;dsfjgkld fjgkldsjgk  jgdsjglk dfjgkljdlk dafgjdfslkgjdfkgfsdlkgjldajfdslfjsdlkgjskldjgf kjash fsah flkja sa klj djf l jakjf kj asj dfj aksf j";
let text3 ="kljsdfjksejdfioewjifjiosdjojsdfopidsjgindfighjsadl;fjdfskgpdsufewsfsdfgfjsdfnosdfjdfgkofdghiwfikdsopj jksdidfjsgfhiosdidsjg sdfiosdjf sofsidj fsdjfsdjfuwhe riej ies usdhfasdjfiosdjf osfisdj fsdsjf sjfisdhjosdnfshs f sdifsdiofhdsfh sds";
let text4 = "yesk opsdf gdsfpksdofgiwe f sejf ikfasdhf sdij fsdf sdf sd fsddshdfjdsfsdiogfj 8 fjsidof jsdf jsgj sdfj sdif iogh sdf jsdig jsdf dsf hsofji jsdif sdi fsdfh sfdsojf sdio fisdf isdi ioj iosdj fosdhf oij io oisahf ugf ih  i of";


let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let desc = document.getElementById("desc-p");

box1.addEventListener("click",()=>{
    desc.innerHTML = text1;
})
box2.addEventListener("click",()=>{
    desc.innerHTML = text2;
})
box3.addEventListener("click",()=>{
    desc.innerHTML = text3;
})
box4.addEventListener("click",()=>{
    desc.innerHTML = text4;
})