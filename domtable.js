const user = [
    {
        fname: 'shivani',
        lname: 'sahu',
    },
    {
        fname: 'janvi',
        lname: 'sahu',
    },
]

function showTable() {
    var divTable = document.getElementById('tableDiv')
    var showBtn = document.getElementById('show')
    var hideBtn = document.getElementById('hide')
    var tbody = document.getElementById('tbody')
    var radiorow = document.getElementById('radio')

    user.map(function (ele, index) {
        var tr = document.createElement('tr')
        tr.id = "tr" + (index + 1)
        //rows.push(tr.id)
    })


    var tr1 = document.createElement('tr')
    var tr2 = document.createElement('tr')

    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')

    td1.innerText = user[0].fname;
    td2.innerText = user[0].lname;
    td3.innerText = user[1].fname;
    td4.innerText = user[1].lname;

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)

    tbody.appendChild(tr1)
    tbody.appendChild(tr2)

    divTable.style.display = 'block';
    radiorow.style.display = 'block'
    showBtn.disabled = true;
    hideBtn.disabled = false;
}
function hideTable() {
    var divTable = document.getElementById('tableDiv')
    var showBtn = document.getElementById('show')
    var hideBtn = document.getElementById('hide')
    var radiorow = document.getElementById('radio')

    divTable.style.display = 'none'
    radiorow.style.display = 'none'
    showBtn.disabled = false;
    hideBtn.disabled = true
    tr1.remove()
    tr2.remove()
}
function fnFilter(value) {
    alert(value)
}




var marksheet1 = [
    {
        science: 67,
        math: 65,
        english: 68,
    },
    {
        science: 67,
        math: 65,
        english: 68,
    }
]
 var  show = document.getElementById('showBtn')
 var  show = document.getElementById('showBtn')

 var tr1 = document.createElement('tr') 
 var tr2 = document.createElement('tr')

 var td1 = document.createElement('td')
 var td2 = document.createElement('td')

 


