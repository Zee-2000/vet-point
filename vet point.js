
let booknow = e => {
    let Data =
    {

        pet: document.getElementById("petcatigory").value,
        complain: document.getElementById("petcomplain").value,
        doctor: document.getElementById("bookappointment").value
    }
    localStorage.setItem('Data is', JSON.stringify(Data))
    console.log(localStorage.getItem('Data is'));
    window.open("index.html", "blank");
    e.preventDefault();
}





