export default async function getWeather(){
    const city = document.getElementById('city').value;
    const getApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c7e9aa8732f94fdf8b3ca7da151af82`,{mode:'cors'});
    const response = await getApi.json();
    console.log(response,'hello');
}