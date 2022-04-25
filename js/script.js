const div = document.querySelectorAll(".cloud")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  entry.target.classList.toggle("move", entry.isIntersecting)
  })
}, {
  threshold: 0.1, 
})

div.forEach(cloud => {
  observer.observe(cloud)
})