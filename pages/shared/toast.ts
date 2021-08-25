import toastr from 'toastr';


toastr.options = {
  positionClass: 'toast-top-right',
  timeOut: 5000,
  extendedTimeOut: 1000,
  closeButton: true,
  // debug : true,
  progressBar: true,
  preventDuplicates: true,
  newestOnTop: true,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
  showDuration: 300,
  hideDuration: 1000,
};

export class ToastUtil {
  static error = toastr.error;
  static success = toastr.success;
  static clear = toastr.clear;
  static warning = toastr.warning;
  static info = toastr.info;
  static remove = toastr.remove;
  static subscribe = toastr.subscribe;
}

