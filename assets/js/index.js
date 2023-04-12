const CreateForm = document
  .querySelector("#add_user")
  ?.addEventListener("submit", (e) => {
    alert("Data Inserted Successfully");
  });

const UpdateUser = document
  .querySelector("#update_user")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const UpdateData = getData(e.target);
    console.log(UpdateData);
    let request = {
      url: `http://localhost:5000/api/users/${UpdateData[0]}`,
    };
  });

function getData(form) {
  let formData = new FormData(form);
  let SaveData = [];
  for (let pair of formData.entries()) {
    SaveData.push(pair[0] + ": " + pair[1]);
  }
  return SaveData;
}
