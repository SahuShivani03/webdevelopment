const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

function fetchData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=&appid=&units=metric`)
    .then((res) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data)
    })
    .catch(()=>{
        alert('error while getting the data')
    })
}



