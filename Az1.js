// let x ="Ahmad" 
// let y ="Ahmad"  
// console.log( x == y)
// console.log()
// /////////////////////////////////////////////////////
// let askemail=prompt('enter your email')
// let email='azaldeenaliswed@gmail.com';
// console.log(askemail.toLowerCase().trim()==email)
// /////////////////////////////////////////////////////
// let progect ='geam';
// let size = 100;
// let solary = 20000;
// console.log(solary <=20000 && size <=120)
// console.log(solary <=20000 || size >=120)
// console.log(solary > 20000 || size >=120)
// console.log(solary <=! 20000 && size <=120)

// /////////////////////////////////////////////////////
// let result =prompt('enter your result');
// if(result > 90)
// {
//     document.write('excellent');
// }
// else if(result > 80) 
// {
//     document.write('vary good'); 
// } 
// else if(result > 70) 
// {
//     document.write('good'); 
// } 
// else if(result > 50) 
// {
//     document.write('acceptable'); 
// } 
// else
// {
//     document.write('fild'); 
// } 


// for(let i =0 ; i <= 10;i+=2)
// {
//     console.log('Ahmad ' + i)
// }
// /////////////////////////////////////////////////////
// let  cars = ['BMW','MERCEDES','HONDA','LOMOZEN'];
// let  models = [ 2021, 2022, 2023, 2024,];
// let  colors = ['red','black','yaluo', 'whit'];
// for(let i=0;i<3;i++)
// {
//     console.log(`cars :${cars[i]}`)
//     for(let j=0;j<3;j++)
// {
//     console.log(`models : ${models[j]}`)
// }
//     for(let x=0;x<3;x++)
// {
//     console.log(`colors : ${colors[x]}`)
// }
// console.log('__________________')
// }
// /////////////////////////////////////////////////////

// function day(p1,p2)
// {
//     let A1=p1 * p2;
//     let A2=A1 / 2;
//     return A2;
// }
// let A3 = day(5,2);

// function A4(day)
// {
//     let A5= A3 * 24;
//     return A5;

// }
// let hours = A4(day);
// console.log(hours);
// /////////////////////////////////////////////////////

// let car = {
//     title: 'lamborgene', price:2500000 ,colors:['red','black','white','green'],modle:2024,
//     visa:function()
//     {
//         return 'cash';
//     } 
// }
// console.log(car.title)
// console.log(car.price)
// console.log(car.colors[3])
// console.log(car.modle)
// /////////////////////////////////////////////////////

// let user = {
//     // property
//     name:{
//     first:`azaldeen`,
//     last:`aliswed`},
//     email:`test@gmail.com`,
//     age:26,
//     skills:[`html`,`css`,`js`,`python`,`php`],
//     active:false,
//     phoneNumber:{
//         first:`0106547687`,
//         second:`0126574687`,
//     },
//     address:{
//         jodan:`amman`,
//         palastin:`ramla`
//     },
//     // method
//     isActive:function(){
//         if(user.active === true){
//             return `hello user`;
//         }
//         else{
//             return `sorry you are not active`;
//         }
//     },
//     getAge:function(){
//         if(user.age >= 18)
//         {
//             return `availalbe`;
//         }
//         else{
//             return `unavailable`;
//         }
//     },
// };
// console.log(user.isActive())
// console.log(user[`getAge`]())
// console.log(user.name)
// /////////////////////////////////////////////////////

// let user1={
//     name:`Azaldeen`,
//     getname:function()
//     {
//         return `hallo ${this.name}`
//     }  
// }
// let user2= Object.create(user1)
// user2.name = `Ahamd`;
// console.log(user2.getname())

// let a1 = {
//     num1:1,
// }
// let a2 = {
//     num2:2,
// }
// let a3 = {
//     num3:3,
// }
// let a4 = Object.assign(a1,a2,a3,{
//     num4:4,
// });
// console.log(a4)

// الكود مشراضي يشتغل
// let container = document.getElementById('container');

// container.outerHTML='<h3>kninikp</h3>';


// let p1 = document.getElementById('p1');
// console.log(p1);
// console.log(p1.innerHTML);
// console.log(p1.outerHTML);
// /////////////////////////////////////////////////////

// let p1 = document.getElementById('p1');
// p1.innerHTML='Hello Worled';

// //element.style.property=value
// p1.style.backgroundColor='#444';
// p1.style.Color='#fff';
// p1.style.padding='10px';
// p1.style.borderLeft='10px solid #fa0';
// p1.style.fontSize='100px';

// //element.style.csstext='';

// //////////////////////////////////////////////////////////////////////////////
// // 1- انشاء العنصر 
// let container = document.createElement(`div`);
// let head = document.createElement(`h1`);
// let img = document.createElement(`img`);
// // 2- اضافة المحتوى 
// let content = document.createTextNode(`Hello World`);
// head.appendChild(content);
// img.src =`2.jpg`;
// img.style.width = `100px`;
//  // 3- اضافة العنصر في المكان المراد 
// container.appendChild(head);
// container.appendChild(img);
// document.body.appendChild(container)
// console.log(container);
// container.style.background = `#666`;
// container.style.color = `#fff`;
// container.style.padding = `10px`;
//  container.style.textAlign = `center`;

//  //انشاء العناصر -1 
// let container = document.createElement(`div`);
// let head = document.createElement(`h1`);
// let img = document.createElement(`img`);
// //2- انشاء المحتوى 
// let content = document.createTextNode(`Hello Worled`);
// head.appendChild(content);
// img.src = `2.jpg`;
// img.style.width = `100%`;  
// // 3- اضافة العنصر في المكان المراد
// container.appendChild(head);
// container.appendChild(img);
// document.body.appendChild(container)
// console.log(container);
// container.style.background = `#666`;
// container.style.color = `#fff`;
// container.style.padding = `10px`;
// container.style.textAlign = `center`;
// //////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////
// let names = [`ahmed`,`ali`,`gamal`,`abdelrahman`];
// let ages= [`27 years old`,`34 years old`,`29 years old`,`40 years old`];
// let container = document.createElement(`div`);
// document.body.appendChild(container);
// container.style.textAlign = `center`;
// function element(name,ages)
// {
//     // elements
//     let card = document.createElement(`div`);
//     let title = document.createElement(`h2`);
//     let age = document.createElement(`p`);
//     let img = document.createElement(`img`);
//     // content
//     let head = document.createTextNode(name);
//     let ageContent = document.createTextNode(ages);
//     img.src = `Abo Obaida.webp`;
//     title.appendChild(head);
//     age.appendChild(ageContent);
//     // style
//     card.style.width = `200px`;
//     card.style.background = `#444`;
//     card.style.color = `#fff`;
//     card.style.padding = `10px`;
//     card.style.margin = `2px`;
//     card.style.display = `inline-block`;
//     img.style.width = `100%`;
//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);
//     container.appendChild(card);
// }
// for(let i = 0; i < 4; i++)
// {
//     element(names[i], ages[i]);
// }

// /////////////////////////////////////////////////////
let btn =document.getElementById('btn')
btn.addEventListener('click',function(){
    document.body.style.background = 'red';
})
btn.addEventListener('click',function(){
    btn.style.background = 'blue';
})
btn.addEventListener('click',function(){
    btn.style.color = 'white';
})
btn.addEventListener('click',function(){
    btn.style.textAlign='center'
})
// /////////////////////////////////////////////////////////
// اذا اشرت على الزرار بطبق الكود "onmouseente"
// let btn = document.getElementById('btn')
// btn.onmouseenter=function(){
//     console.log('click');
// }
// اذا ضغطت على الزرار وقبل متشيل ايدك عن الزرار بطبق الكود "onmousedown"
// let btn = document.getElementById('btn')
// btn.onmousedown=function(){
//     console.log('click');
// }
// ويوجد لل ايفنت مثير من الخصائص
// /////////////////////////////////////////////////////////

// let btn = document.getElementById('btn')
// btn.onkeyup=function(){
//     console.log('click');
// }

// let btn = document.getElementById('btn')
// btn.onkeydown=function(){
//     console.log('click');
// }

// let btn = document.getElementById('btn')
// btn.onblur=function(){
//     btn.style.border='2px solid #f00';
// }
// btn.onfocus=function(){
//     btn.style.border='2px solid #f00';
    
// }

// onresize=function(){
//     document.body.style.background='black';
// }

// onload=function(){
//     document.body.style.background='black';
// }
// /////////////////////////////////////////////////////
// برنامج تحويل الدولار الى دينار والعكس صحيح  
// let dollar = document.getElementById('dollar');
// let denar = document.getElementById('denar');

// dollar.onkeyup=function()
// {
//     denar.value=dollar.value * 0.75;
// }
// denar.onkeyup=function()
// {
//     dollar.value=denar.value / 0.75;
// }

// document.body.style.background='black';
// dollar.style.color='10px solid #fff';
// denar.style.color='10px solid #fff';
// dollar.style.background='red';
// denar.style.background='red';
// ////////////////////////////////////////////////////
// let aftar=document.getElementById(`aftar`);
// let before=document.getElementById(`before`);
// let append=document.getElementById(`append`);
// let content=document.getElementById(`content`);
// let contener=document.getElementById(`contener`);
// contener.style.background='#ffa';
// contener.style.height='100px';

// aftar.onclick = function()
// {
//     contener.after(content)
// }
// before.onclick = function()
// {
//     contener.before(content)
// }
// append.onclick = function()
// {
//     contener.append(content)
// }
// /////////////////////////////////////////////////////      
// let btnOpen=document.getElementById('open');
// let btnClose=document.getElementById('close');
// let container=document.querySelector('.container');

// btnClose.onclick = function(){
//     this.classList.add('hide');
//     btnOpen.classList.remove('hide')
//     container.classList.add('hide')
// }    
// btnOpen.onclick=function(){
//     this.classList.add('hide');
//     btnClose.classList.remove('hide');
//     container.classList.remove('hide');

// }
// /////////////////////////////////////////////////////
// let hello=document.getElementById('hello');

// hello.onclick=function()
// //toggl ابتشتغل مكان onclick and oncotextmenu
// {
//   hello.classList.toggle("name")  
// }

// hello.onclick=function()
// {
//   hello.classList.add("name")  
// }
// hello.oncontextmenu=function()
// {
//   hello.classList.remove("name")  
// }
// ////////////////////////////////////////////////////
// let text = document.getElementById('text')
// let mybtn = document.getElementById('btn')

// window.onload = function()
// {
//     text.focus();
// }
// mybtn.onclick = function()
// {
//     mybtn.style.background="#ffa";
// }
// ////////////////////////////////////////////
// let btn = document.getElementById('btn');
// onscroll = function () {
//     if (this.scrollY >= 400) {
//         btn.style.display = 'block';
//     }
//     else{
//         btn.style.display = 'none';
//     }
// }
// btn.onclick=function(){
//     scroll({
//         left:0,
//         top:0,
//         behavior:"smooth",

//     })
// }
// /////////////////////////////////////////
// ////////////////////////////////////////
// console.log(   screen.width    )
// console.log(   screen.height   )
// ///////////////////////////////////////

// ///////////////////////////////////////////////
// let hello = setTimeout(function() {
//     console.log('hello')
    
// },4000)
// clearTimeout(hello)

// let i=0;
// let hello = setInterval(function() {
//     console.log(i++)
//     clearInterval(i==5)
// },1000)
// clearInterval()
// /////////////////////////////////////////////
// localStorage 
// // درس مهم جدا localStorage 
// localStorage.setItem('name','Azaldden');
// // localStorage.name='Azaldden';
// // وجه اخر للlocalStorageلانه يغير ما داخله
// localStorage.setItem('name','Azaldden');
// localStorage.name='Ali';
// console.log(        localStorage.name            )
// console.log(        typeof localStorage.name            )

// localStorage.setItem('age','55');
// console.log(       localStorage.age             );









