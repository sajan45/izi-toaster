import Vue from 'vue'
import iZtoast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default function (ctx, inject) {
  ctx.$toaster = iZtoast
  inject('toaster', iZtoast)
}
