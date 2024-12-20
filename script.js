function snezhinki() {document.getElementById("snezhinki1").style.opacity="0.7";
    document.getElementById("snezhinki1").style.transition="1s";
}
function snezhinkiubrat() {document.getElementById("snezhinki1").style.opacity="0";
    document.getElementById("snezhinki1").style.transition="1s";
    document.getElementById("gir").style.opacity="0";
}
function fon1() {document.getElementById("fonnn").style.background="no-repeat url(ng2.jpg)";
    document.getElementById("fonnn").style.backgroundSize="100% 200%";

}
function fon2() {document.getElementById("fonnn").style.background="no-repeat url(ng.webp)";
    document.getElementById("fonnn").style.backgroundSize="100% 170%";
}
function gir() {
    let nums = document.getElementById('gir').className; 
    if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
    if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
    if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
}  
setInterval(gir, 500)

function girlanda() {document.getElementById("gir").style.opacity="1";
}