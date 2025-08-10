// 免費試用按鈕懸浮視窗
document.querySelector(".free-test-btn").onclick = function () {
	document.getElementById("modal-overlay").style.display = "flex";
};
document.getElementById("modal-close").onclick = function () {
	document.getElementById("modal-overlay").style.display = "none";
};
document.getElementById("modal-overlay").onclick = function (e) {
	if (e.target === this) this.style.display = "none";
};

// 立即體驗按鈕抖動效果
setInterval(function () {
	const btn = document.querySelector(".test-now-btn");
	btn.classList.add("shake");
	setTimeout(() => btn.classList.remove("shake"), 500);
}, 2000);

// 元素滑入
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("slide-in");
			} else {
				entry.target.classList.remove("slide-in");
			}
		});
	},
	{ threshold: 0.2 }
);

document.querySelectorAll(".img-left, .img-right").forEach((el) => {
	observer.observe(el);
});
