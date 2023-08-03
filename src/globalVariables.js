let currentPage = '';

//Set current page function
const setCurrentPage = (pageName) => {
  currentPage = pageName;
}

const getCurrentPage = () => currentPage;

export {setCurrentPage, getCurrentPage};
