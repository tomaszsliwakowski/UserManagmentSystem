document.querySelector("#add_user")?.addEventListener("submit", (e) => {
  alert("Data Inserted Successfully");
});

document
  .querySelector("#update_user")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const UpdateData = getData(e.target);
    await fetch(`http://localhost:5000/api/users/${UpdateData.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(UpdateData),
    }).then((res) => {
      res.ok
        ? alert("Data Updated Successflully")
        : alert("Data Updated Unsuccessful");
    });
  });

if (window.location.pathname == "/") {
  document.querySelectorAll(".table tbody td a.delete").forEach((element) =>
    element?.addEventListener("click", async () => {
      let id = document
        .querySelector(".table tbody td a.delete")
        .getAttribute("data-id");

      if (confirm("Do you really want to delete this record?")) {
        await fetch(`http://localhost:5000/api/users/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        }).then((res) => {
          res.ok
            ? alert("Data Deleted Successflully")
            : alert("Data Deleted Unsuccessful");
          location.reload();
        });
      }
    })
  );
}

function getData(form) {
  let formData = new FormData(form);
  let Data = [];
  let SaveData = {};
  for (let pair of formData.entries()) {
    Data.push({ [pair[0]]: pair[1] });
  }
  for (let i = 0; i < Data.length; i++) {
    Object.assign(SaveData, Data[i]);
  }
  return SaveData;
}
