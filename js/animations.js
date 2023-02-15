  const INCREASE_NUMBER_ANIMATION_SPEED = 50;
  function increaseNumberAnimationStep (i, element, endNumber) {
      if (i <= endNumber) {
        if (i === endNumber) {
          element.innerText = i + '+';
        } else {
          element.innerText = i;
        }
      }
    
        i++;
          
  setTimeout(increaseNumberAnimationStep(i, element, endNumber), delay=50); 
  function initIncreaseNumberAnimation() {
    let element='5000+'; 
  }
  function increaseNumberAnimationStep() {
    console.log (0, element, 5000);}
    document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
      if (event.target.value === 'other') {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');
            const input = document.createElement('input');
            input.placeholder = "Введите ваш вариант";
            input.type = "text";
              formContainer.appendChild(input);
              document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'));
            }
            const otherInput = document.querySelector('.form__other-input');
            if (event.target.value !== 'other' && otherInput) { 
            document.querySelector('#form form').removeChild(otherInput);
                    }
          });
          
  }
  function updateScroll() {
    if (window.scrollY > 0) {
      document.querySelector('header') .classList.add('header__scrolled');
    } else {
      document.querySelector('header') .classList.remove('header__scrolled');
    }
    window.addEventListener('scroll', updateScroll);
  
      let windowBottomPosition = window.scrollY + window.innerHeight;
      let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
      if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation();
    }
  }
  window.addEventListener('scroll', updateScroll);
      let animationInited = true;
      document.querySelector('initIncreaseNumberAnimation');
      
      classList.add('&& !animationInited');
    
  
  function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
   
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
   
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
  });   //Плавный преход к форме от Контакты в header до Оставьте свои контакты
  
  function addSmoothScroll(document.querySelector('.more-button'));



    