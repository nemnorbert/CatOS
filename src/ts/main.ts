let loadtime: number = new Date().getTime();
const loadingCircle: HTMLElement | null = document.querySelector('#loadingCircle');
const installBox: HTMLElement | null = document.querySelector('#installBox');

// JSON Fetch
const fetchJSON = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

// PreLoader
const preLoader = async () => {
    const preLoader: HTMLElement | null = document.querySelector('#preLoader');
    loadtime = (new Date().getTime() - loadtime) / 1000;
    console.log(loadtime);
  
    const idealTime = 3;
    const loadtime_bonus = loadtime <= idealTime ? (idealTime - loadtime)*1000 : 0;
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(loadtime_bonus);
  
    loadingCircle.style.transform = "translateY(-300%)";
    installBox.style.transform = "translateY(0%)";

    /*
    if (preLoader !== null) {
      setTimeout(() => {
        preLoader.style.display = "none";
      }, 500);
    }
    */
}

window.addEventListener("load", preLoader);