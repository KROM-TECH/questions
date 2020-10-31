const cosub = document.getElementById("cosubmit");

cosub.addEventListener("click", function (e) {
  e.preventDefault();
  const uni = document.getElementById("university").value;
  const fac = document.getElementById("faculty").value;
  const lev = document.getElementById("level").value;
  const sem = document.getElementById("semester").value;
  const ct = document.getElementById("ct").value;
  const coc = document.getElementById("coc").value;

  console.log(uni, fac, lev, ct, coc);

  db.collection(`course_outline`)
    .doc(`${uni}`)
    .collection(`${fac}`)
    .doc(`${lev}`)
    .set({
      title: ct,
      content: coc,
      semester: sem,
    })
    .then(() => {
      cosub.innerHTML = "saved";
      location.reload();
    });
});
