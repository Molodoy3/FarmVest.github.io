"use strict";
/* import * as functions from './modules/functions.js'; //импорт всех функций */
/* import Swiper, { Navigation, Pagination } from 'swiper'; //импорт свайпера */
/* import delegationClick from './modules/script.js';
functions.isWebp(); //запуск функции определения поддержки webp */

import {DynamicAdapt} from './modules/dynamic.js';
import {delegationClick} from './modules/script.js';
import {headerScroll} from './modules/script.js';

window.addEventListener("load", windowLoad);
function windowLoad() {
    document.body.classList.add('load');
    headerScroll();
    delegationClick();
    DynamicAdapt();
}
