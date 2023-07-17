const button=document.getElementById("button");
const jokecontent=document.getElementById("jokecontent");
const joke=document.getElementById("joke");

button.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function (responce){
        button.textContent="Next";
        jokecontent.textContent=responce.data.setup;
        joke.textContent="";
        setTimeout(function(){
            joke.textContent=responce.data.punchline;
        },3000);
            
    })
    .catch(function (error){
        

    })
}