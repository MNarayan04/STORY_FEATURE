var arr = [
    {
        dp:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80",story:"https://images.unsplash.com/photo-1617870314635-fc819547ec11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
        {
            dp:"https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",story:"https://images.unsplash.com/photo-1695366255895-a1ab61c32e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"},
        {
            dp:"https://images.unsplash.com/photo-1665658115136-bf3fcb10a3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",story:"https://images.unsplash.com/photo-1695582570771-bca78d2089b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
        {
            dp:"https://plus.unsplash.com/premium_photo-1669638780803-ce74f7f3ea76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",story:"https://images.unsplash.com/photo-1695515127510-ed25c7d1b175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        },
]

var clutter = ""

arr.forEach(function(elem,idx){
    // console.log(elem,idx);

    clutter+=`  <div class="story">
    <img id="${idx}"  src="${elem.dp}" alt="">
</div>`

    // console.log(elem);
    // clutter+="hello"
    // clutter+=elem
})
// console.log(clutter);
document.querySelector("#storiyan").innerHTML=clutter

document.querySelector("#storiyan").addEventListener("click",function(dets){
    // var value = arr[dets.target.id].story ;
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
})