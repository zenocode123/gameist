'use strict';

const header = document.querySelector('header');
const navbar = document.querySelector('#navbar');
const navbarLinks = document.querySelector('#navbar_links');

const btnScrollTo = document.querySelector('.btn__scroll');

const section1 = document.querySelector('#section--1');
const latestNewsContainer = document.querySelector('#latest_news');

const top3Container = document.querySelector('.top3');
const topOthersContainer = document.querySelector('.top_others');

const timelinerContainer = document.querySelector('.timeliner');

// prettier-ignore
const chineseNum = { 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九', 10: '十' };

const latestNewsDatas = [
  {
    image_link: 'latest_news-1.jpg',
    information:
      '「HELLO! インディー」2羽のペンギンによる命がけの山登り『ブレッドとフレッド』',
    description: `命綱でつながれた2羽のペンギンを2人のプレイヤーがそれぞれ操作して山を登るアクションゲーム『ブレッドとフレッド』が配信されました。`,
    detail_link:
      'https://www.nintendo.com/jp/topics/article/4ae9519a-52f5-4381-b545-d26a11a72244',
  },
  {
    image_link: 'latest_news-2.webp',
    information:
      '世界中のプレイヤーとタイムアタック。Nintendo Switch用ソフト『Nintendo World Championships ファミコン世界大会』が7月18日発売決定。',
    description: `「Nintendo World Championships」とは、1990年に北米地域で開催された任天堂の公式ゲーム大会のこと。当時はNES※のさまざまなゲームをプレイし、チャンピオンの座をかけて競い合っていました。そしてこのたび、世界中のプレイヤーが気軽に参加できる現代ならではのファミコン大会、その名も『Nintendo World Championships ファミコン世界大会』が、Nintendo Switch用ソフトとして2024年7月18日（木）に発売されます。`,
    detail_link:
      'https://www.nintendo.com/jp/topics/article/94cc3ec0-cd23-4030-8cf1-cdc9ea93c497',
  },
  {
    image_link: 'latest_news-3.webp',
    information:
      'Nintendo Switch『ペーパーマリオRPG』は本日発売。グッズとのセットキャンペーンも開始。',
    description: `個性豊かな仲間たちと、ペラペラなマリオが紙の世界を冒険するNintendo Switch『ペーパーマリオRPG』が、本日発売となりました。`,
    detail_link:
      'https://www.nintendo.com/jp/topics/article/ac024723-cd51-46d7-aaf6-6217e87261ec',
  },
];

const rankingsData = [
  {
    rank: 1,
    image_link: 'top3-1.jpeg',
    game_name: '茉莉花之炯 天命胤異傳',
    system: 'NS',
    status: 'new',
  },
  {
    rank: 2,
    image_link: 'top3-2.jpeg',
    game_name: '真‧女神轉生 V Vengeance',
    system: 'PS5',
    status: 'down',
  },
  {
    rank: 3,
    image_link: 'top3-3.jpeg',
    game_name: 'TEVI',
    system: 'PS5',
    status: 'down',
  },
  {
    rank: 4,
    game_name: '薩爾達傳說',
    system: 'NS',
    status: 'down',
  },
  {
    rank: 5,
    game_name: '任天堂明星大亂鬥 特別版',
    system: 'NS',
    status: 'down',
  },
  {
    rank: 6,
    game_name: 'SEKIRO: SHADOWS DIE TWICE',
    system: 'PS5',
    status: 'up',
  },
  {
    rank: 7,
    game_name: '賽馬娘 Pretty Derby 熱血喧鬧大感謝祭！',
    system: 'NS',
    status: 'new',
  },
  {
    rank: 8,
    game_name: '《南方四賤客：下雪天！》一般版',
    system: 'PS5',
    status: 'up',
  },
  {
    rank: 9,
    game_name: '《女神異聞錄 5 戰略版》中文版',
    system: 'PS5',
    status: 'new',
  },
  {
    rank: 10,
    game_name: 'Shovel Knight: Treasure Trove',
    system: 'NS',
    status: 'down',
  },
];

const timelineData = [
  {
    date: '5.14 火',
    list: [
      {
        image_link: 'timeline-1.jpg',
        game_name: 'バイオミュータント（Biomutant）',
        system: 'NS',
      },
    ],
  },
  {
    date: '5.16 木',
    list: [
      {
        image_link: 'timeline-2.jpg',
        game_name: 'ドリーム囲碁',
        system: 'NS',
      },
      {
        image_link: 'timeline-3.jpg',
        game_name: 'ドリーム将棋',
        system: 'NS',
      },
    ],
  },
  {
    date: '5.30 木',
    list: [
      {
        image_link: 'timeline-4.jpg',
        game_name: '九魂の久遠',
        system: 'NS',
      },
      {
        image_link: 'timeline-5.jpg',
        game_name:
          '東京サイコデミック　～公安調査庁特別事象科学情報分析室　特殊捜査事件簿～',
        system: 'NS',
      },
      {
        image_link: 'timeline-6.jpg',
        game_name: 'ワイズマンズワールド リトライ',
        system: 'NS',
      },
    ],
  },
];

function init() {
  setSliderActive();
  displayLatestNews();
  displayTop3();
  displayTopOthers();
  setStickyNav();
  setAllSectionsDisplay();
  displayTimelineUI();
  displayImage();
}

function setSliderActive() {
  const slides = document.querySelectorAll('.slider__slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.slider__dots');

  const maxSlide = slides.length;
  let currentSlide;
  init();

  function init() {
    currentSlide = 0;
    goToSlide(0);
    createDots();
    activateDot(0);
  }

  function goToSlide(currentSlide) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
  }

  function nextSlide() {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    activateDot(currentSlide);
    goToSlide(currentSlide);
  }

  function prevSlide() {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    activateDot(currentSlide);
    goToSlide(currentSlide);
  }

  function createDots() {
    slides.forEach((_, index) => {
      const html = `<button class="dot p-2 mx-2" data-slide="${index}"></button>`;

      dotContainer.insertAdjacentHTML('beforeend', html);
    });
  }

  function activateDot(currentSlide) {
    dotContainer
      .querySelectorAll('.dot')
      .forEach(dot => dot.classList.remove('dot--active'));

    dotContainer
      .querySelector(`.dot[data-slide="${currentSlide}"]`)
      .classList.add('dot--active');
  }

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  window.addEventListener('keydown', event => {
    event.keyCode === 37 && prevSlide();
    event.keyCode === 39 && nextSlide();
  });

  dotContainer.addEventListener('click', event => {
    if (event.target.classList.contains('dot')) {
      const { slide: currentSlide } = event.target.dataset;

      activateDot(Number(currentSlide));
      goToSlide(Number(currentSlide));
    }
  });
}

function displayLatestNews() {
  latestNewsContainer.innerHTML = '';

  latestNewsDatas.forEach(latestNewsData => {
    const { image_link, information, description, detail_link } =
      latestNewsData;

    const html = `
        <li class="d-flex flex-column flex-lg-row mt-5 px-5">
          <img 
            class="pl-2" 
            src="https://placehold.co/400x225"
            data-src="./img/${image_link}"
          />
          <div
            class="flex-grow-1 d-flex flex-column justify-content-between px-2 px-lg-5 py-3 py-lg-1"
            style="min-width: 0"
          >
            <div class="badge mb-3 mb-lg-0"><span class="px-2 py-1">サービス</span></div>
            <a href="#" class="information mb-3 mb-lg-0">${information}</a>
            <p class="description text-truncate mb-3 mb-lg-0">${description}</p>
            <a href="${detail_link}" class="detail">詳細はこちら</a>
          </div>
        </li>`;

    latestNewsContainer.insertAdjacentHTML('beforeend', html);
  });
}

function scrollToSection1() {
  section1.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(event) {
  event.preventDefault();

  if (!event.target.classList.contains('menu__link')) return;

  const element = document.querySelector(event.target.getAttribute('href'));

  element.scrollIntoView({ behavior: 'smooth' });
}

function handleHover(event, opacity) {
  if (!event.target.classList.contains('menu__link')) return;

  const link = event.target;
  const siblings = link.closest('nav').querySelectorAll('.menu__link');
  const logo = link.closest('nav').querySelector('#logo');

  siblings.forEach(
    sibling => sibling !== link && (sibling.style.opacity = opacity)
  );
  logo.style.opacity = opacity;
}

function setStickyNav() {
  const { height: navHeight } = navbar.getBoundingClientRect();

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `${-navHeight}px`,
  });

  headerObserver.observe(header);

  function stickyNav(entries) {
    const [entry] = entries;

    navbar.classList.remove('container-fluid', 'sticky', 'px-5');

    !entry.isIntersecting &&
      navbar.classList.add('container-fluid', 'sticky', 'px-5');
  }
}

function switchHeaderHeight() {
  const width = window.innerWidth;

  switch (true) {
    case width <= 576:
      header.style.height = '50vh';
      break;
    case width <= 768:
      header.style.height = '70vh';
      break;
    case width <= 992:
      header.style.height = '90vh';
      break;
    default:
      header.style.height = '100vh';
  }
}

function getSystemClass(system) {
  return system.toLowerCase() === 'ns' ? 'ns' : 'ps';
}

function displayTop3() {
  top3Container.innerHTML = '';

  const top3Datas = rankingsData.filter(data => data.rank < 4);

  top3Datas.forEach(({ game_name, image_link, rank, status, system }) => {
    const html = `
          <div class="card px-0 mx-2">
             <div class="card__title p-1" data-rank="${rank}">
               <i class="fa-solid fa-crown"></i>
               第${chineseNum[rank]}名
             </div>    
             <img 
              src="https://placehold.co/240x240"
              data-src="./img/${image_link}" 
             />
             <h5 class="p-1">${game_name}</h5>
             <div class="p-1 d-flex align-items-center justify-content-between">
              <span class="game__badge game__badge--${getSystemClass(
                system
              )} p-1">${system}</span>
              <div class="status status--${status}"></div>
            </div>
          </div>`;

    top3Container.insertAdjacentHTML('beforeend', html);
  });
}
function displayTopOthers() {
  topOthersContainer.innerHTML = '';

  const [a, b, c, ...topOthers] = rankingsData;

  topOthers.forEach(({ rank, game_name, system, status }) => {
    const html = `
          <li class="d-flex align-items-end p-2">
            <p>第${chineseNum[rank]}名</p>
            <span class="game__badge game__badge--${getSystemClass(
              system
            )} p-1 mx-4">${system}</span>
            <h5>${game_name}</h5>
            <div class="status status--${status} ml-auto"></div>
          </li>`;

    topOthersContainer.insertAdjacentHTML('beforeend', html);
  });
}

function setAllSectionsDisplay() {
  const allSections = document.querySelectorAll('section');

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });

  function revealSection(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');

      observer.unobserve(entry.target);
    });
  }
}

function displayTimelineUI() {
  timelinerContainer.innerHTML = '';

  timelineData.forEach(({ date, list }) => {
    let html = `
        <ul class="timeline d-flex">
          <p class="timeline__date">
            ${date.slice(0, -2)}<span
              class="d-flex align-items-center justify-content-center m-1"
              >${date.slice(-1)}</span
            >
          </p>`;

    list.forEach(({ image_link, game_name, system }, index) => {
      html += `
          <li class="mt-5 ml-4 ${index === list.length - 1 ? 'mr-4' : ''}">
            <img src="https://placehold.co/280x157" data-src="./img/${image_link}" />
            <div
              class="p-1 py-2 d-flex align-items-center justify-content-between"
            >
              <h5 class="text-truncate">${game_name}</h5>
              <span class="game__badge game__badge--ns p-1">${system}</span>
            </div>
          </li>`;
    });

    html += `</ul>`;

    timelinerContainer.insertAdjacentHTML('beforeend', html);
  });
}

function displayImage() {
  const imgTargets = document.querySelectorAll('img[data-src]');

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
  });
  imgTargets.forEach(imgTarget => imgObserver.observe(imgTarget));

  function loadImg(entries, observer) {
    entries.forEach(enrty => {
      if (!enrty.isIntersecting) return;

      enrty.target.src = enrty.target.dataset.src;

      observer.unobserve(enrty.target);
    });
  }
}

init();
btnScrollTo.addEventListener('click', scrollToSection1);
navbarLinks.addEventListener('click', scrollToSection);
navbar.addEventListener('mouseover', event => handleHover(event, 0.5));
navbar.addEventListener('mouseout', event => handleHover(event, 1));
// rwd
window.addEventListener('resize', switchHeaderHeight);
