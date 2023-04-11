const goToElement = (elem: string): void => {
    const navbarHeight = 90;
    const element = document.getElementById(elem);
    if (!element) return;
    const elementPosition = element.offsetTop - navbarHeight;
    const scrollPosition = elementPosition;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  export default goToElement;