const p = document.querySelector('#horas')
const foto = document.querySelector('#foto')
const data = new Date();

const hr = data.getHours()
p.textContent = `Agora são ${hr} horas`;

if(hr > 6 && hr < 12) {

    foto.src = 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'
}
else if (hr >= 12 && hr < 18) {

    foto.src = 'https://cdn.pixabay.com/photo/2019/08/06/02/16/mountains-4387209_960_720.jpg'
}
else{

    foto.src = 'https://cdn.pixabay.com/photo/2017/10/20/01/06/north-star-2869817__340.jpg'
}