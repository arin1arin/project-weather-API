
let btn= document.querySelector('button')
btn.addEventListener('click',()=>{
  let inp= document.querySelector('input')
  let city = inp.value
  let h2 = document.querySelector('h2')
  let p = document.querySelector('p')


  let apikey='777dfe99396622ae5129760d2e07b892'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then((res)=>
{
  return res.json()
}).then((data)=>{
  console.log(data);
  h2.innerText=data.main.temp
  p.innerText=data.wind.deg
})

})