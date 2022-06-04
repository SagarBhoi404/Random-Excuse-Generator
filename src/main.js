const sub = document.getElementById('btn');
const excuse = document.getElementById('excuse');
const getexc = async (e) => {
    sub.disabled = true;
    sub.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading';
    let url = 'https://excuser.herokuapp.com/v1/excuse';
    const res = await fetch(url);
    const data = await res.json();
    excuse.innerText = data[0].excuse;
    sub.disabled = false;
    sub.innerHTML = 'Find Out More';
}
sub.addEventListener('click', getexc);
