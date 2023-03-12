const form = document.getElementById('myform');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const collegeName = document.getElementById('collegename').value;
  const discipline = document.getElementById('discipline').value;

  let years = null;
  const values = document.getElementsByName('flexRadioDefault');
  for (let i = 0; i < values.length; i++) {
    if (values[i].checked) {
      years = parseInt(values[i].value);
    }
  }

  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const selectedEvents = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  const selectedEventString = encodeURIComponent(selectedEvents.join(','));

  const url = `newpage.html?name=${name}&email=${email}&contact=${contact}&city=${city}&state=${state}&collegeName=${collegeName}&discipline=${discipline}&years=${years}&events=${selectedEventString}`;
  window.open(url, '_blank');
});
