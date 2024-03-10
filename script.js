function calculAge() {
	console.log("calculAge function called");
    const dd = parseInt(document.getElementById('day').value);
    const mm = parseInt(document.getElementById('month').value);
    const yy = parseInt(document.getElementById('year').value);
    const today = new Date();

    let td = today.getDate();
    let tm = today.getMonth() + 1;
    let ty = today.getFullYear();

    let days = td - dd;
    let months = tm - mm;
    let years = ty - yy;

    if (months < 0 || (months === 0 && td < dd)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const prevMonthLD = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = prevMonthLD + td - dd;
        months--;
    }

    document.getElementById("re_years").textContent = years;
    document.getElementById("re_months").textContent = months;
    document.getElementById("re_days").textContent = days;
}

