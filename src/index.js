import generateJoke from "./generateJoke";
import './styles/main.scss'
import '../node_modules/bootstrap/js/index.esm'
import '../node_modules/bootstrap/js/index.umd'
import portrait from './assets/Main Image.jpeg'
import experience from './assets/best-customer-experience.png'
import international from './assets/international.png'
import education from './assets/education.png'
import form from './assets/Mobile-Phone-icon.png'

const mainImage = document.getElementById('mainImage');
mainImage.src = portrait;

const imgExperience = document.getElementById('imgExperience');
imgExperience.src = experience;

const imgInternational = document.getElementById('imgInternational');
imgInternational.src = international;

const imgEducation = document.getElementById('imgEducation');
imgEducation.src = education;

const formImg = document.getElementById('formImg');
formImg.src = form;