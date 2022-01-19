let counter=0, obj, xpos, ypos;
obj=document.querySelector("#obj");
obj.onmouseover=function() {
    counter++; //sıfırdan başladı, her yakalayamadığımda arttırarak saymaya başlayacak
    xpos=parseInt(Math.random()*1000); // tam sayıya ayrıştırması için ParseInt kullandık. Rastgele sayı üretecek.
    ypos=parseInt(Math.random()*700); // 0 ile 700 arasında değer üret. Bu rastgele koordinatlar ile kutu hareket etmiş olacak.
    obj.style.left=xpos+"px"; // px cinsinden hareket etmesi için px ekledik.
    obj.style.top=ypos+"px";
    obj.style.width=this.clientWidth+10+"px"; // tarayıcının genişliğine göre ayarla ve 10 ekle. Yani 10 px arttıracak her harekette.
    obj.style.height=this.clientHeight+10+"px";   
}

obj.onclick=function(){ //tıklandığından alert versin. Ve ilk boyutuna dönsün.
    alert(counter+". seferde yakaladın");
    obj.style.width="110px";
    obj.style.height="110px";
    conunter=0; //yakalandığında sayaç sıfırlanır.
}