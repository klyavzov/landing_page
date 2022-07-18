// disabled breadcrumbs last child
let breadcrumbs = document.querySelectorAll('.breadcrumb-link');
breadcrumbs[breadcrumbs.length - 1].classList.add('active-breadcrumb');

// pagination
let paginationBtn = document.querySelectorAll('.pagination-button');
for (let i = 0; i < paginationBtn.length; i++) {
  paginationBtn[i].addEventListener('click', function () {
    paginationBtn.forEach(function (el) { el.classList.remove('disabled-pagination-button') });

    if (this.classList.contains('back') === false && this.classList.contains('next') === false) {
      paginationBtn.forEach(function (el) { el.classList.remove('active-pagination-button') });
      this.classList.add('active-pagination-button');
      if (i < Math.round(paginationBtn.length / 2)) {
        paginationBtn[i + Math.round(paginationBtn.length / 2)].classList.add('active-pagination-button');
      } else {
        paginationBtn[i - Math.round(paginationBtn.length / 2)].classList.add('active-pagination-button');
      }
    } else if (this.classList.contains('back')) {
      for (let j = 1; j < paginationBtn.length / 2; j++) {
        if (paginationBtn[j].classList.contains('active-pagination-button')) {
          paginationBtn[j].classList.remove('active-pagination-button');
          paginationBtn[j + Math.round(paginationBtn.length / 2)].classList.remove('active-pagination-button');
          paginationBtn[j - 1].classList.add('active-pagination-button');
          paginationBtn[j - 1 + Math.round(paginationBtn.length / 2)].classList.add('active-pagination-button');
          break;
        }
      }
    }
    else if (this.classList.contains('next')) {
      for (let j = 1; j < paginationBtn.length / 2; j++) {
        if (paginationBtn[j].classList.contains('active-pagination-button')) {
          paginationBtn[j].classList.remove('active-pagination-button');
          paginationBtn[j + Math.round(paginationBtn.length / 2)].classList.remove('active-pagination-button');
          paginationBtn[j + 1].classList.add('active-pagination-button');
          paginationBtn[j + 1 + Math.round(paginationBtn.length / 2)].classList.add('active-pagination-button');
          break;
        }
      }
    }
    for (let j = 0; j < paginationBtn.length; j++) {
      if (paginationBtn[j].classList.contains('active-pagination-button') && paginationBtn[j - 1].classList.contains('back')) {
        paginationBtn[j - 1].classList.add('disabled-pagination-button');
        if (j < Math.round(paginationBtn.length / 2)) {
          paginationBtn[j - 1 + Math.round(paginationBtn.length / 2)].classList.add('disabled-pagination-button');
        } else {
          paginationBtn[j - 1 - Math.round(paginationBtn.length / 2)].classList.add('disabled-pagination-button');
        }
      } else if (paginationBtn[j].classList.contains('active-pagination-button') && paginationBtn[j + 1].classList.contains('next')) {
        paginationBtn[j + 1].classList.add('disabled-pagination-button');
        if (j < Math.round(paginationBtn.length / 2)) {
          paginationBtn[j + 1 + Math.round(paginationBtn.length / 2)].classList.add('disabled-pagination-button');
        } else {
          paginationBtn[j + 1 - Math.round(paginationBtn.length / 2)].classList.add('disabled-pagination-button');
        }
      }
    }
  });
}

// sort
let sortBtn = document.querySelectorAll('.main-sort .param-heading');
sortBtn.forEach(function (elem) {
  elem.addEventListener('click', function () {
    let svg = elem.querySelector('svg');
    let path = elem.querySelector('path');
    let line = elem.querySelector('line');
    let sortOptions = elem.querySelector('.sort-options');
    if (sortOptions.classList.contains('visible-sort-options')) {
      sortOptions.classList.remove('visible-sort-options');
      sortOptions.querySelectorAll('.sort-option').forEach(function (elem) {
        elem.style.animation = "hide 1s"
      })
      svg.classList.remove('active-svg');
      path.classList.remove('active-path-line');
      line.classList.remove('active-path-line');
      elem.classList.remove('selected');
    }
    else {
      sortOptions.classList.add('visible-sort-options');
      sortOptions.querySelectorAll('.sort-option').forEach(function (elem) {
        elem.style.animation = "show 1s"
      })
      svg.classList.add('active-svg');
      path.classList.add('active-path-line');
      line.classList.add('active-path-line');
      elem.classList.add('selected');
    }

  })
})

// filter
let params = document.querySelectorAll('.filter-param');
params.forEach(function (elem) {
  elem.querySelector('.param-heading').addEventListener('click', function () {
    let filterItems = elem.querySelector('.filter-items');
    let svg = elem.querySelector('svg');
    let path = elem.querySelector('path');
    let line = elem.querySelector('line');
    if (filterItems.style.display === 'none') {
      filterItems.style.display = 'block';
      svg.classList.remove('active-svg');
      path.classList.remove('active-path-line');
      line.classList.remove('active-path-line');
    }
    else {
      filterItems.style.display = 'none';
      svg.classList.add('active-svg');
      path.classList.add('active-path-line');
      line.classList.add('active-path-line');
    }
  })
})

let years = document.querySelectorAll('.filter-number');
years.forEach(function (elem) {
  elem.addEventListener('focus', function () {
    elem.classList.add('active-number')
  })
  elem.addEventListener('blur', function () {
    elem.classList.remove('active-number')
  })
})

let keywords = document.querySelector('.filter-text');
keywords.addEventListener('focus', function () {
  this.classList.add('active-number')
})
keywords.addEventListener('blur', function () {
  this.classList.remove('active-number')
})
