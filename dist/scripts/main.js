new WOW({
  animateClass: "animate__animated",
}).init();

$(".cars-carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".arrow-prev",
  nextArrow: ".arrow-next",
});

$(".feedback-carousel1").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  prevArrow: ".arrow-prev2",
  nextArrow: ".arrow-next2",
  appendDots: $(".slick-slider-dots1"),
});

$(".feedback-carousel2").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: ".arrow-prev22",
  nextArrow: ".arrow-next22",
  appendDots: $(".slick-slider-dots2"),
});

$(".burger").click(function() {
  $(".menu2").css("display", "flex")
})

$(".menu-cancel").click(()=>{
  $(".menu2").hide()
})

let call = $(".call");

$("#order-call").click(function () {
  call.css("display", "flex");
});

$(".call-cancel").click(function () {
  call.hide();
  $(".call-feedback").hide();
  $(".call-form").show();
  callName.val("");
  callTel.val("");
  callName.css("border-color", "transparent");
  callTel.css("border-color", "transparent");
  error.hide()
});

let request = $(".request");

$("#order-request").click(function () {
  request.css("display", "flex");
});
$("#order-request1").click(function () {
  request.css("display", "flex");
  $("#selectCar>option:eq(1)").attr("selected", true)
});
$("#order-request2").click(function () {
  request.css("display", "flex");
  $("#selectCar>option:eq(2)").attr("selected", true)
});
$("#order-request3").click(function () {
  request.css("display", "flex");
  $("#selectCar>option:eq(3)").attr("selected", true)
});
$("#order-request4").click(function () {
  request.css("display", "flex");
  $("#selectCar>option:eq(4)").attr("selected", true)
});

$(".request-cancel").click(function () {
  request.hide();
  $(".request-feedback").hide();
  $(".request-form").show();
  selectCar.val("");
  selectStart.val("");
  pointA.val("");
  pointB.val("");
  requestName.val("");
  requestTel.val("");
  requestEmail.val("");
  requestMessage.val("");
  selectCar.css("border-color", "#464646")
  selectStart.css("border-color", "#464646")
  pointA.css("border-color", "#464646")
  pointB.css("border-color", "#464646")
  requestName.css("border-color", "#464646")
  requestTel.css("border-color", "#464646")
  requestEmail.css("border-color", "#464646")
});

let callName = $("#call-name");
let callTel = $("#call-tel");
let loader = $(".loader");
let error = $(".has-error");

$(".call-form-btn").click(function () {
  let hasError = false;

  error.hide();

  if (!callName.val()) {
    error.first().show();
    callName.css("border-color", "red");
    hasError = true;
  } else {
    error.first().hide();
    callName.css("border-color", "green");
  }

  if (!callTel.val()) {
    hasError = true;
    error.last().show();
    callTel.css("border-color", "red");
  } else {
    callTel.css("border-color", "green");
  }

  if (!hasError) {
    loader.css("display", "flex");

    $.ajax({
      method: "POST",
      url: "https://testologia.ru/checkout",
      data: { name: callName.val(), tel: callTel.val() },
    }).done(function (msg) {
      loader.hide();
      console.log(msg);

      if (msg.success === 1) {
        alert(
          "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ"
        );
      } else if (msg.success === 0) {
        $(".call-form").hide();
        $(".call-block").css({
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        });
        $(".call-feedback").show();
      }
    });
  }
});

let selectCar = $("#selectCar");
let selectStart = $("#selectStartPoint");
let pointA = $("#pointA");
let pointB = $("#pointB");
let requestName = $("#requestName");
let requestTel = $("#requestTel");
let requestEmail = $("#requestEmail");
let requestMessage = $("#requestMessage");

$("#request-btn").click(function () {
  let hasError = false;

  if (!selectCar.val()) {
    hasError = true;
    selectCar.css("border-color", "red");
  } else {
    selectCar.css("border-color", "#464646");
  }

  if (!selectStart.val()) {
    hasError = true;
    selectStart.css("border-color", "red");
  } else {
    selectStart.css("border-color", "#464646");
  }

  if (!pointA.val()) {
    hasError = true;
    pointA.css("border-color", "red");
  } else {
    pointA.css("border-color", "#464646");
  }

  if (!pointB.val()) {
    hasError = true;
    pointB.css("border-color", "red");
  } else {
    pointB.css("border-color", "#464646");
  }

  if (!requestName.val()) {
    hasError = true;
    requestName.css("border-color", "red");
  } else {
    requestName.css("border-color", "#464646");
  }

  if (!requestTel.val()) {
    hasError = true;
    requestTel.css("border-color", "red");
  } else {
    requestTel.css("border-color", "#464646");
  }

  if (!requestEmail.val()) {
    hasError = true;
    requestEmail.css("border-color", "red");
  } else {
    requestEmail.css("border-color", "#464646");
  }

  if (!hasError) {
    loader.css("display", "flex");

    $.ajax({
      method: "POST",
      url: "https://testologia.ru/checkout",
      data: {
        selectCar: selectCar.val(),
        selectStart: selectStart.val(),
        pointA: pointA.val(),
        pointB: pointB.val(),
        requestName: requestName.val(),
        requestTel: requestTel.val(),
        requestEmail: requestEmail.val(),
        requestMessage: requestMessage.val(),
      },
    }).done(function (msg) {
      loader.hide();
      console.log(msg);

      if (msg.success === 1) {
        alert(
          "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ"
        );
      } else if (msg.success === 0) {
        $(".request-form").hide();
        $(".request-feedback").show();
      }
    });
  }
});
