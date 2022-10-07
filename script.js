const but = document.querySelectorAll('.butCh')
const info = document.querySelectorAll('.info2')

but.forEach(b => {
    b.addEventListener('click', e => {
        removeData()
        generarData(b.id)
    })
})

let removeData = () => {
    info.forEach(i => {
        i.innerHTML = ""
    })
}

let generarData = id => {

    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let acc = 0
        switch (id) {
            case "dy":
                info.forEach(i => {
                    let temp = `
                    <h2>${data[acc].timeframes.daily.current}hrs</h2>
                    <h4>Yesterday - ${data[acc].timeframes.daily.previous}hrs</h4>
                    `
                    acc++
                    i.innerHTML = temp
                    but.forEach(b => {
                        b.id == "dy" ? b.classList.add('active') : b.classList.remove("active")
                    })
                })
                break
            case "wy":
                info.forEach(i => {
                    let temp = `
                    <h2>${data[acc].timeframes.weekly.current}hrs</h2>
                    <h4>Last Week - ${data[acc].timeframes.weekly.previous}hrs</h4>
                    `
                    i.innerHTML = temp
                    acc++
                    but.forEach(b => {
                        b.id == "wy" ? b.classList.add('active') : b.classList.remove("active")
                    })
                })
                break
            case "my":
                info.forEach(i => {
                    let temp = `
                    <h2>${data[acc].timeframes.monthly.current}hrs</h2>
                    <h4>Last Month - ${data[acc].timeframes.monthly.previous}hrs</h4>
                    `
                    i.innerHTML = temp
                    acc++
                    but.forEach(b => {
                        b.id == "my" ? b.classList.add('active') : b.classList.remove("active")
                    })
                })
                break
        }
    })

}