const insert = (num) => {
  $(".calc-display").val($(".calc-display").val() + num);
};

const equal = () => {
  $(".calc-display").val(eval($(".calc-display").val()));
};

const reset = () => {
  $(".calc-display").val("");
};

const del = () => {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
};
