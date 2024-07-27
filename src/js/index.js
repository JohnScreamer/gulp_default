// const root=document.querySelector(".root")
// console.log(root);
// class Body{

//     constructor(area,clas){
//         this.element;
//         this.area=area;
//         this.clas=clas;
//         this.currentPosition;
//     }
//     createElement(){
//         const elem=document.createElement("div");
//         elem.classList.add(this.clas);
//         this.element=elem;
        
//     }
//     addElemtTo(){
//         this.createElement()
//         this.area.append(this.element)
//     }
    
    
// }



// function isElementIntersecting(elementA, elementB) {
//     const rectA = elementA.getBoundingClientRect();
//     const rectB = elementB.getBoundingClientRect();

//     return !(
//         rectA.right < rectB.left ||
//         rectA.left > rectB.right ||
//         rectA.bottom < rectB.top ||
//         rectA.top > rectB.bottom
//     );
// }




// class BodyControle extends Body{
    

//     constructor(area,clas){
//         super(area,clas)
//         this.isJump=false;
        
//     }
//     moveLeft(){
//         const currentPosition=this.element.style.left
//         console.log(currentPosition);
        
//         this.element.style.left = `${(parseInt(currentPosition)||0)-10}px`
//     }
//     moveRight(){
//         const currentPosition=this.element.style.left
//         console.log(this.element);
        
//         this.element.style.left = `${(parseInt(currentPosition)||0)+10}px`
//     }
  

   
//     jump(){
//         if(this.isJump)return;
//         this.isJump=true
//         let start=50;
        
//       let stage=10
//          const time= setInterval(()=>{
//         if(stage<1){
//             this.isJump=false
//             clearInterval(time)
//             return;
//         }
//         if(stage>5){
//             this.element.style.top = `${start-3}%`
//             start=start-3 
//         }else{
//             this.element.style.top = `${start+3}%`
//             start=start+3
//         }
//         stage=stage-1
//       },100)
        

//     }
    
// }

    
// class GameWatcher extends BodyControle{
// constructor(area){
//     super(area,clas)
// }

//     addMovment(){
        
//         document.addEventListener("keydown",(e)=>{
//             if(e.key==="ArrowLeft"){
//                 super.moveLeft()
//                 return
//             }
//             if(e.key==="ArrowRight"){
//                 super.moveRight()
//                 return
//             }
//             if(e.key==="ArrowUp"){
//                 super.jump()
//             }
           
            
//         })
//     }

// }

// const rock=new BodyControle(root,"rock")
// const Hearo=new BodyControle(root,"body")
// Hearo.addElemtTo()
// rock.addElemtTo()
// Hearo.addMovment()

