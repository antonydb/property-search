const searchForm = document.getElementById('search');
const locationInput = searchForm.querySelector('#location');
const searchError = searchForm.querySelector('#search-error');
const isEmpty = value => String(value).trim().length === 0;

const onSubmit = e => {
  if (isEmpty(locationInput.value)) {
    e.preventDefault();

    locationInput.setAttribute('aria-invalid', 'true');
    locationInput.setAttribute('aria-describedby', 'search-error');
    searchError.innerHTML = 'This field cannot be empty';
    searchError.setAttribute('role', 'alert');
    searchError.classList.add('is-active');
  }
}

searchForm.addEventListener('submit', onSubmit);