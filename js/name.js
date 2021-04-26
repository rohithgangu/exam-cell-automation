window.addEventListener('load',() => {
    const name= localStorage.getItem('user');
    document.getElementById('stuname').innerHTML=name;
})