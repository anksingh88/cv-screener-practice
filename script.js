console.log("This is cv screener ");

const data=[
    {
        name : 'rohan',
        age:'18',
        city:'kolkate',
        languages:'python',
        image:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    {
        name : 'harry',
        age:'28',
        city:'pune',
        languages:'c++',
        image:"https://randomuser.me/api/portraits/thumb/men/54.jpg"
    },
    {
        name : 'om',
        age:'48',
        city:'mumbai',
        languages:'javascript',
        image:"https://randomuser.me/api/portraits/thumb/women/78.jpg"
    }
]

//cv iterator

function cviterator(profiles){
    nextindex=0;
    return{
        next:function(){
            return nextindex<profiles.length ? {value: profiles[nextindex++],done:false}:
            {done:true}
        }
    };
}
const candidates=cviterator(data);
nextcv();
const next=document.getElementById("next");
next.addEventListener('click',nextcv);

function nextcv(){
    const currentcandidate= candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    image.innerHTML = `<img src='${currentcandidate.image}'>`;
   

    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age} Years old</li>
    <li class="list-group-item">${currentcandidate.city}</li>
    <li class="list-group-item">${currentcandidate.languages}</li>
    <li class="list-group-item">${currentcandidate.name}</li>
  </ul>`

}