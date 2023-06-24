const nameElem= document.getElementById('name')
const titleElem= document.getElementById('title')
const imgUrlElem= document.getElementById('imgUrl')
const btnElem = document.querySelector('button')
const POSTS_URL="http://localhost:3000/posts"

btnElem.onclick=()=>{
    const name = nameElem.value
    const title = titleElem.value
    const  imgUrl = imgUrlElem.value
    axios.post(
        POSTS_URL,
        {
            name,title,imgUrl
        }).then(()=>{
            alert('Postunuz Elave Olundu')
            nameElem.value=""
            titleElem.value=""
            imgUrlElem.value=""
        })
}