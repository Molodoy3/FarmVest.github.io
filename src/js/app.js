"use strict";
/* import * as functions from './modules/functions.js'; //импорт всех функций */
/* import Swiper, { Navigation, Pagination } from 'swiper'; //импорт свайпера */
/* import delegationClick from './modules/script.js';
functions.isWebp(); //запуск функции определения поддержки webp */

import {DynamicAdapt} from './modules/dynamic.js';
import {delegationClick} from './modules/script.js';
import {headerScroll} from './modules/script.js';
import { animOnScroll } from './modules/animOnScroll.js';
import { formValidate } from './modules/formValidate.js';
import { initSpollers } from './modules/spollers.js';
import { isMobile } from './modules/functions.js';
import { mprlx } from './modules/parallax-mouse.js';

window.addEventListener("load", windowLoad);
function windowLoad() {
    document.body.classList.add('load');
    headerScroll();
    animOnScroll();
    delegationClick();
    DynamicAdapt();
    formValidate();
    initSpollers();
    if(!isMobile()) mprlx();
    
}
