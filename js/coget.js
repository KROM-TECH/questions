const courses = document.getElementById('cocontent')

document.getElementById('coget').addEventListener('click', function (e) {
  e.preventDefault();

  const uni = document.getElementById('university').value
  const fac = document.getElementById('faculty').value
  const lev = document.getElementById('level').value



  db.collection(`${uni}`).doc(`${fac}`).collection(`details`).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {

        loadData(doc.data())
      })
    }).then()
    .catch((err)=>{console.log(err)})
  

})





function loadData(data) {
  const html = `

      <li>
        <div class="collapsible-header"><i class="material-icons">book</i>${data.title}</div>
        <div class="collapsible-body"><span>${data.content}</span></div>
      </li>

    `;
  courses.innerHTML += html


}
