(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  replace: function(target, prop) {
    var i, regex;
    i = null;
    regex = null;
    for (i in prop) {
      regex = new RegExp(i, 'gi');
      target = target.replace(regex, prop[i]);
    }
    return target;
  },
  eventClick: function(data, proxy) {
    if (typeof proxy[data.callback] !== 'function') {
      throw new Error('Callback should be a function. Fix config.');
    }
    $(data["class"]).bind('click', function() {
      return proxy[data.callback]($(this));
    });
    return void 0;
  },
  eventDelegate: function(data, proxy) {
    if (typeof proxy[data.callback] !== 'function') {
      throw new Error('Callback should be a function. Fix config.');
    }
    $(data["class"]).delegate(data.delegateTo, 'click', function() {
      return proxy[data.callback]($(this));
    });
    return void 0;
  },
  getCookie: function(cookie) {
    var re, value;
    re = new RegExp(cookie + '=([^;]+)');
    value = re.exec(document.cookie);
    if (value !== null) {
      return unescape(value[1]);
    } else {
      return false;
    }
  },
  setCookie: function(cname, cvalue, expires) {
    var date;
    date = new Date;
    document.cookie = cname + "=" + cvalue + ";expires=" + expires;
    return void 0;
  },
  setToStorage: function(kname, kvalue) {
    if (typeof Storage !== void 0) {
      localStorage.setItem(kname, kvalue);
    } else {
      this.setCookie(kname, kvalue, 365);
    }
    return void 0;
  },
  getFromStorage: function(kname) {
    if (typeof Storage !== void 0) {
      localStorage.getItem(kname);
    } else {
      this.getCookie(kname);
    }
    return void 0;
  }
};

},{}],2:[function(require,module,exports){
window.Module = require('./index');

},{"./index":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9pbmRleC5qcyIsImJ1aWxkL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24odGFyZ2V0LCBwcm9wKSB7XG4gICAgdmFyIGksIHJlZ2V4O1xuICAgIGkgPSBudWxsO1xuICAgIHJlZ2V4ID0gbnVsbDtcbiAgICBmb3IgKGkgaW4gcHJvcCkge1xuICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKGksICdnaScpO1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnJlcGxhY2UocmVnZXgsIHByb3BbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuICBldmVudENsaWNrOiBmdW5jdGlvbihkYXRhLCBwcm94eSkge1xuICAgIGlmICh0eXBlb2YgcHJveHlbZGF0YS5jYWxsYmFja10gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgc2hvdWxkIGJlIGEgZnVuY3Rpb24uIEZpeCBjb25maWcuJyk7XG4gICAgfVxuICAgICQoZGF0YVtcImNsYXNzXCJdKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHByb3h5W2RhdGEuY2FsbGJhY2tdKCQodGhpcykpO1xuICAgIH0pO1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH0sXG4gIGV2ZW50RGVsZWdhdGU6IGZ1bmN0aW9uKGRhdGEsIHByb3h5KSB7XG4gICAgaWYgKHR5cGVvZiBwcm94eVtkYXRhLmNhbGxiYWNrXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRml4IGNvbmZpZy4nKTtcbiAgICB9XG4gICAgJChkYXRhW1wiY2xhc3NcIl0pLmRlbGVnYXRlKGRhdGEuZGVsZWdhdGVUbywgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcHJveHlbZGF0YS5jYWxsYmFja10oJCh0aGlzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfSxcbiAgZ2V0Q29va2llOiBmdW5jdGlvbihjb29raWUpIHtcbiAgICB2YXIgcmUsIHZhbHVlO1xuICAgIHJlID0gbmV3IFJlZ0V4cChjb29raWUgKyAnPShbXjtdKyknKTtcbiAgICB2YWx1ZSA9IHJlLmV4ZWMoZG9jdW1lbnQuY29va2llKTtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmVzY2FwZSh2YWx1ZVsxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIHNldENvb2tpZTogZnVuY3Rpb24oY25hbWUsIGN2YWx1ZSwgZXhwaXJlcykge1xuICAgIHZhciBkYXRlO1xuICAgIGRhdGUgPSBuZXcgRGF0ZTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArIFwiPVwiICsgY3ZhbHVlICsgXCI7ZXhwaXJlcz1cIiArIGV4cGlyZXM7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfSxcbiAgc2V0VG9TdG9yYWdlOiBmdW5jdGlvbihrbmFtZSwga3ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSB2b2lkIDApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtuYW1lLCBrdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldENvb2tpZShrbmFtZSwga3ZhbHVlLCAzNjUpO1xuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xuICB9LFxuICBnZXRGcm9tU3RvcmFnZTogZnVuY3Rpb24oa25hbWUpIHtcbiAgICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa25hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldENvb2tpZShrbmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbn07XG4iLCJ3aW5kb3cuTW9kdWxlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuIl19
