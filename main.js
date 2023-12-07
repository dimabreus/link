console.log(`


█████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ██████╗ ███████╗                        
██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗██╔════╝██╗                     
███████║██║   ██║   ██║   ███████║██║   ██║██████╔╝███████╗╚═╝                     
██╔══██║██║   ██║   ██║   ██╔══██║██║   ██║██╔══██╗╚════██║██╗                     
██║  ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██║███████║╚═╝                     
╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                        
                                                                                   
 ██████╗ ██████╗ ██╗███╗   ███╗ █████╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗   
██╔═══██╗██╔══██╗██║████╗ ████║██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║██╔════╝   
██║██╗██║██║  ██║██║██╔████╔██║███████║██████╔╝██████╔╝█████╗  ██║   ██║███████╗   
██║██║██║██║  ██║██║██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║   ██║╚════██║   
╚█║████╔╝██████╔╝██║██║ ╚═╝ ██║██║  ██║██████╔╝██║  ██║███████╗╚██████╔╝███████║▄█╗
 ╚╝╚═══╝ ╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚═╝
                                                                                   
 ██████╗    ██████╗ ██████╗ ██╗   ██╗██╗██████╗  █████╗ ███╗   ██╗                 
██╔═══██╗   ██╔══██╗██╔══██╗██║   ██║██║██╔══██╗██╔══██╗████╗  ██║                 
██║██╗██║   ██████╔╝██║  ██║██║   ██║██║██║  ██║███████║██╔██╗ ██║                 
██║██║██║   ██╔══██╗██║  ██║██║   ██║██║██║  ██║██╔══██║██║╚██╗██║                 
╚█║████╔╝██╗██████╔╝██████╔╝╚██████╔╝██║██████╔╝██║  ██║██║ ╚████║██╗              
 ╚╝╚═══╝ ╚═╝╚═════╝ ╚═════╝  ╚═════╝ ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝              


`);
console.log("Write Linkaboba(1) into a console");
console.log("1100110_1101001_1110010_1100101");

let abobaElements = document.querySelectorAll('.item > a');

function Linkaboba(a) {
  if (a === 0) {
    abobaElements.forEach(el => {
        el.style.animation = '0';
      });
  } else if (a === 1) {
    abobaElements.forEach(el => {
      el.style.animation = 'rotatee 1s infinite linear';
    });
  } else if (a === 1100110_1101001_1110010_1100101) {
    document.body.style.backgroundImage = "url(images/fire.gif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
}

// Random theme

let Theme = Math.floor(Math.random() * 5);
console.log("Тема сайта", Theme)
if (Theme == 0){
  document.body.style.background = "linear-gradient(90deg, BurlyWood 0%, MediumSlateBlue 100%)";
}
else if (Theme == 1){
  document.body.style.background = "linear-gradient(90deg, Orchid 0%, PaleGreen 100%)";
}
else if (Theme == 2){
  document.body.style.background = "linear-gradient(90deg, SpringGreen 0%, DeepSkyBlue 100%";
}
else if (Theme == 3){
  document.body.style.background = "linear-gradient(90deg, Gold 0%, DeepSkyBlue 100%)";
}
else if (Theme == 4){
  document.body.style.background = "linear-gradient(90deg, Brown 0%, DarkSeaGreen 100%)";
}