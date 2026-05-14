const oilCountEl = document.getElementById("oilCount");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const newOilBtn = document.getElementById("newOilBtn");
const wasteOilBtn = document.getElementById("wasteOilBtn");
const historyBtn = document.getElementById("historyBtn");
const benefitBtn = document.getElementById("benefitBtn");
const toast = document.getElementById("toast");

const priceBtn = document.getElementById("priceBtn");
const priceModal = document.getElementById("priceModal");
const priceModalClose = document.getElementById("priceModalClose");
const priceModalCloseDim = document.getElementById("priceModalCloseDim");

let oilCount = 1;
const MIN_OIL_COUNT = 1;
const MAX_OIL_COUNT = 10;

plusBtn.addEventListener("click", () => {
  if (oilCount < MAX_OIL_COUNT) {
    oilCount++;
    oilCountEl.textContent = oilCount;
  } else {
    showToast("최대 10통까지 요청 가능합니다");
  }
});

minusBtn.addEventListener("click", () => {
  if (oilCount > MIN_OIL_COUNT) {
    oilCount--;
    oilCountEl.textContent = oilCount;
  }
});

newOilBtn.addEventListener("click", () => {
  showToast(`✅ 새 기름 ${oilCount}통 요청 완료`);
});

wasteOilBtn.addEventListener("click", () => {
  showToast("✅ 폐기름 수거 요청 완료");
});

historyBtn.addEventListener("click", () => {
  showToast("요청 내역 화면으로 이동합니다");
});

benefitBtn.addEventListener("click", () => {
  showToast("수거 실적에 따라 할인 또는 교환 혜택 제공");
});

priceBtn.addEventListener("click", openPriceModal);
priceModalClose.addEventListener("click", closePriceModal);
priceModalCloseDim.addEventListener("click", closePriceModal);

function openPriceModal() {
  priceModal.classList.add("show");
  priceModal.setAttribute("aria-hidden", "false");
}

function closePriceModal() {
  priceModal.classList.remove("show");
  priceModal.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}
