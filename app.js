document.querySelector('#myForm').addEventListener('submit', save);
function save(e) {
    e.preventDefault();
    var Subject = document.querySelector('#Subject').value;
    var Name = document.querySelector('#Name').value;
    var Phone = document.querySelector('#Phone').value;
    var Email = document.querySelector('#Email').value;
    if (!validateForm(Subject, Name, Phone, Email)) {
        return false;
      }
      var Detail = {
        subject: Subject,
        name: Name,
        phone: Phone,
        email: Email
      }
      console.log(Detail);
}