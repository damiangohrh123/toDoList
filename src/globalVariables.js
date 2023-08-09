let currentPage = '';

//Set current page function
const setCurrentPage = (pageName) => {
  currentPage = pageName;
}

//Get current page function
const getCurrentPage = () => currentPage;

export { setCurrentPage, getCurrentPage };
