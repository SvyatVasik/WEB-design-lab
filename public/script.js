

    async function getData(){
        try {
          return await axios.get(
            `http://localhost:3012/api/myteam`
          );
        } catch (error) {
          console.log(error);
        }
    };

  document.getElementById('btn').onclick = () =>{
    getData().then((a)=>{
        a.data.map((row) =>{
            createRows(row)
        })
    
})
}
let count = 3;
createRows = (row) =>{
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <th scope="row">${++count}</th>
    <td>${row.name}</td>
    <td>${row.surname}</td>
    <td><img src="${row.img}" alt=""></td>
    `
      document.getElementById('container').appendChild(tr);
}