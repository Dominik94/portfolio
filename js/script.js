const navLinks = document.querySelectorAll('.nav-link')
const projects = document.querySelector('.projects')
const technologies = document.querySelector('.technologies')
const contact = document.querySelector('.contact')
const projectsBtn = document.querySelector('.projects-btn')
const technologiesBtn = document.querySelector('.technologies-btn')
const contactBtn = document.querySelector('.contact-btn')

navLinks.forEach(navLink =>
	navLink.addEventListener('click', () => {
		switch (navLink.getAttribute('href')) {
			case '#projects':
				projects.style.display = 'flex'
				technologies.style.display = 'none'
				contact.style.display = 'none'
				projectsBtn.classList.add('active')
				technologiesBtn.classList.remove('active')
				contactBtn.classList.remove('active')
				break
			case '#technologies':
				projects.style.display = 'none'
				technologies.style.display = 'flex'
				contact.style.display = 'none'
				projectsBtn.classList.remove('active')
				technologiesBtn.classList.add('active')
				contactBtn.classList.remove('active')
				break
			case '#contact':
				projects.style.display = 'none'
				technologies.style.display = 'none'
				contact.style.display = 'flex'
				projectsBtn.classList.remove('active')
				technologiesBtn.classList.remove('active')
				contactBtn.classList.add('active')
				break
		}
	})
)