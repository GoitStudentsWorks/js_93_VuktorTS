import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import '../css/index.css';
import '../css/pagination.css';
import icons from '../images/icons.svg';
import { ProductsAPI } from './helpers/food-api';
import { filters } from './filters';
import { createCardsMarkup } from './helpers/create-markup';
const containerPagination = document.getElementById('pagination');

getPaginationPages();
const leftBtn = document.querySelector('.tui-prev');
const rightBtn = document.querySelector('.tui-next');

async function getPaginationPages() {
  const api = new ProductsAPI();

  const getTotalItems = await api.getProducts();
  console.log(getTotalItems);
  const itemsPerPageSum = getTotalItems.perPage * getTotalItems.totalPages;
  const limit = setLimit();

  const options = {
    totalItems: itemsPerPageSum / limit,
    itemsPerPage: 1,
    visiblePages: window.innerWidth < 768 ? 2 : 3,
    page: 1,
    currentPage: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  if (limit < setLimit()) {
    filters.ulRef.style.display = 'none';
  }
  const pagination = new Pagination('pagination', options);
  pagination.on('beforeMove', onBeforeMovePagination);
}
function onBeforeMovePagination(e) {
  const { page } = e;
  getPagination(page);
}
async function getPagination(page) {
  const limit = setLimit();
  const api = new ProductsAPI();
  const response = await api.getProducts({ page: page, limit: limit });

  const dataProducts = response.results;

  paginationBtnHandler(dataProducts);
}
function paginationBtnHandler(products) {
  filters.ulRef.innerHTML = '';

  filters.ulRef.insertAdjacentHTML('beforeend', createCardsMarkup(products));
}
function setLimit() {
  let limit = 0;
  if (window.innerWidth < 768) {
    limit = 6;
    if (limit < 6) {
      containerPagination.style.display = 'none';
    }
    return limit;
  } else if (window.innerWidth < 1440) {
    limit = 8;
    if (limit < 8) {
      containerPagination.style.display = 'none';
    }
    return limit;
  } else {
    limit = 9;
    if (limit < 9) {
      containerPagination.style.display = 'none';
    }
    return limit;
  }
}
leftBtn.innerHTML = `<svg width="24" height="24" class="icon-left"><use href='${icons}#icon-left'></use></svg>`;

rightBtn.innerHTML = `<svg width="24" height="24" class="icon-right"><use href='${icons}#icon-right'></use></svg>`;
